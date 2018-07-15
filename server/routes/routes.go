package routes

import (
  tools"github.com/sean_c/fizz_buzz/server/tools/functions"
  "os"
  "net/http"
  "strconv"
)

func ExecuteFizzBuzz(w http.ResponseWriter, r *http.Request){

    googleFunctionUrl := os.Getenv("FUNCTION_URL")

    maxRange, err := strconv.Atoi(os.Getenv("MAX_RANGE"))
    if err != nil {
      maxRange = 100
    }

    response, getErr := tools.SendFizzBuzzRequest(googleFunctionUrl, maxRange)
    if getErr != nil {
      panic(getErr)
    }

    resultsArray := tools.ParseResponseResults(response)

    tools.PrintResults(resultsArray)

    tools.SendResultsToClient(resultsArray, w)

}
