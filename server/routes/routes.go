package routes

import (
  tools"github.com/scorbettUM/fizz_buzz/server/tools/functions"
  "os"
  "net/http"
  "strconv"
  "log"
)

func ExecuteFizzBuzz(w http.ResponseWriter, r *http.Request){

    googleFunctionUrl := os.Getenv("FUNCTION_URL")
    if googleFunctionUrl == "" {
      panic("Error: No function url found.")
    }

    maxRange, err := strconv.Atoi(os.Getenv("MAX_RANGE"))
    if err != nil {
      maxRange = 100
    }

    response, getErr := tools.SendFizzBuzzRequest(googleFunctionUrl, maxRange)
    if getErr != nil {
      log.Fatal(getErr)
    }

    resultsArray := tools.ParseResponseResults(response)

    tools.PrintResults(resultsArray)

    tools.SendResultsToClient(resultsArray, w)

}
