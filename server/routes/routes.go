package routes

import (
  tools"github.com/scorbettUM/fizz_buzz/server/tools/functions"
  "os"
  "net/http"
  "strconv"
)

func SeedMaxRange(w http.ResponseWriter, r *http.Request){
  maxRange, err := strconv.Atoi(os.Getenv("MAX_RANGE"))
  if err != nil {
    maxRange = 100
  }

  responseErr := tools.SendMaxRangeToClient(maxRange, w)
  if responseErr != nil {
    tools.SendError(http.StatusInternalServerError, err.Error(), w)
  }

}

func ExecuteFizzBuzz(w http.ResponseWriter, r *http.Request){

    googleFunctionUrl := os.Getenv("FUNCTION_URL")
    if googleFunctionUrl == "" {
      tools.SendError(http.StatusInternalServerError, "Error: No function url found.", w)
      return
    }

    var maxRange int
    var err error

    if r.Method == "GET" {
      maxRange, err = strconv.Atoi(os.Getenv("MAX_RANGE"))
      if err != nil {
        maxRange = 100
      }
    } else if r.Method == "POST" {
      maxRange, err = tools.ParseMaxRange(r)
      if err != nil {
        tools.SendError(http.StatusInternalServerError, err.Error(), w)
      }
    }

    response, getErr := tools.SendFizzBuzzRequest(googleFunctionUrl, maxRange, w)
    if getErr != nil {
      tools.SendError(response.StatusCode, getErr.Error(), w)
      return
    }
    if response.StatusCode >= 200 && response.StatusCode < 300 {
      resultsArray, parseErr := tools.ParseResponseResults(response)
      if parseErr != nil {
        return
      }
      tools.PrintResults(resultsArray)
      err = tools.SendResultsToClient(resultsArray, w)
      if err != nil {
        tools.SendError(http.StatusInternalServerError, err.Error(), w)
      }

    }

}
