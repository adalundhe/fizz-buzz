package functions

import (
  models"github.com/sean_c/fizz_buzz/server/models"
  "net/http"
  "io/ioutil"
  "bytes"
  "encoding/json"
  "fmt"
)

func SendFizzBuzzRequest(googleUrl string, maxRange int) (*http.Response, error){

  maxRangeData := models.MaxRange{Max_Range: maxRange}

  data, err := json.Marshal(maxRangeData)

  request, err := http.NewRequest("POST", googleUrl, bytes.NewBuffer(data))
  if err != nil {
    panic(err)
  }
  request.Header.Set("X-Custom-Header", "myvalue")
  request.Header.Set("Content-Type", "application/json")

  client := &http.Client{}

  response, getErr := client.Do(request)
  if err != nil {
    panic(err)
  }

  return response, getErr
}

func ParseResponseResults(response *http.Response) []string {
  body, readErr := ioutil.ReadAll(response.Body)
  if readErr != nil {
    panic(readErr)
  }

  results := models.ResultsArray{}

  jsonErr := json.Unmarshal(body, &results)
  if jsonErr != nil {
    panic(jsonErr)
  }

  return results.Results_Array
}

func PrintResults(resultsArray []string) {

  fmt.Println("\nRESULTS FROM EXECUTION OF FIZZBUZZ CLOUD FUNCTION:")
  fmt.Println("\n--------------------------------------------------\n")
  for _, result := range resultsArray {

    fb_string := fmt.Sprintf("GOT: %v\n", result)
    fmt.Println(fb_string)

  }
}

func SendResultsToClient(resultsArray []string, w http.ResponseWriter) {
  data := models.ResultsArray{Results_Array: resultsArray}

  jsonData, err := json.Marshal(data)
  if err != nil {
    panic(err)
  }

  w.Header().Set("Content-Type", "application/json")
  w.Write(jsonData)

}
