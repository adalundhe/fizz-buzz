package routes

import (
  tools"github.com/scorbettUM/fizz_buzz/server/tools/functions"
  "os"
  "net/http"
  "strconv"
)

func ExecuteFizzBuzz(w http.ResponseWriter, r *http.Request){

    googleFunctionUrl := os.Getenv("FUNCTION_URL")
    if googleFunctionUrl == "" {
      tools.SendError(http.StatusInternalServerError, "Error: No function url found.", w)
      return
    }

    maxRange, err := strconv.Atoi(os.Getenv("MAX_RANGE"))
    if err != nil {
      maxRange = 100
    }

    response, getErr := tools.SendFizzBuzzRequest(googleFunctionUrl, maxRange, w)
    if getErr != nil {
      tools.SendError(response.StatusCode, getErr.Error(), w)
      return
    }
    if response.StatusCode >= 200 && response.StatusCode < 300 {
      resultsArray, parseErr := tools.ParseResponseResults(response, w)
      if parseErr != nil {
        return
      }
      tools.PrintResults(resultsArray)
      err:= tools.SendResultsToClient(resultsArray, w)
      if err != nil {
        tools.SendError(http.StatusInternalServerError, err.Error(), w)
      }

    }

}
