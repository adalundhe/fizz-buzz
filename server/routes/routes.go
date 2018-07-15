package routes

import (
  models"github.com/sean_c/fizz_buzz/server/models"
  "os"
  "net/http"
  "fmt"
  "encoding/json"
  "io/ioutil"
  "strconv"
  "bytes"
  "time"
)

func Index(w http.ResponseWriter, r *http.Request) {
  return
}

func ExecuteFizzBuzz(w http.ResponseWriter, r *http.Request){

    client := http.Client{
      Timeout: time.Second * 60, // Maximum of 2 secs
    }

    googleFunctionUrl := os.Getenv("FUNCTION_URL")

    maxRange, err := strconv.Atoi(os.Getenv("MAX_RANGE"))
    if err != nil {
      panic(err)
    }

    maxRangeData := &models.MaxRange{Max_Range: maxRange}

    data, err := json.Marshal(maxRangeData)

    request, err := http.NewRequest(http.MethodPost, googleFunctionUrl, bytes.NewBuffer(data))
    if err != nil {
      panic(err)
    }

    response, getErr := client.Do(request)
    if getErr != nil {
      panic(getErr)
    }

    body, readErr := ioutil.ReadAll(response.Body)
    if readErr != nil {
      panic(readErr)
    }

    results := models.ResultsArray{}

    jsonErr := json.Unmarshal(body, &results)
    if jsonErr != nil {
      panic(err)
    }
    fmt.Println(results.Results_Array)

}
