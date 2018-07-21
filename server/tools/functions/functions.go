package functions

import (
  models"github.com/scorbettUM/fizz_buzz/server/models"
  "net/http"
  "io/ioutil"
  "bytes"
  "encoding/json"
  "fmt"
)

func SendFizzBuzzRequest(googleUrl string, maxRange int, w http.ResponseWriter) (*http.Response, error){

  maxRangeData := models.MaxRange{Max_Range: maxRange}

  data, err := json.Marshal(maxRangeData)
  if err != nil {
    return nil, err
  }

  request, err := http.NewRequest(http.MethodPost, googleUrl, bytes.NewBuffer(data))
  if err != nil {
    return nil, err
  }
  request.Header.Set("X-Custom-Header", "myvalue")
  request.Header.Set("Content-Type", "application/json")

  client := &http.Client{}

  response, err := client.Do(request)
  if err != nil {
    return nil, err
  }

  return response, nil
}

func ParseMaxRange(response *http.Request) (int, error) {
  body, readErr := ioutil.ReadAll(response.Body)
  if readErr != nil {
    return 100, readErr
  }

  results := models.MaxRange{}

  jsonErr := json.Unmarshal(body, &results)
  if jsonErr != nil {
    return 100, jsonErr
  }

  maxRange := results.Max_Range

  return maxRange, nil
}

func ParseResponseResults(response *http.Response) ([]string, error) {
  body, readErr := ioutil.ReadAll(response.Body)
  if readErr != nil {
    return nil, readErr
  }

  results := models.ResultsArray{}

  jsonErr := json.Unmarshal(body, &results)
  if jsonErr != nil {
    return nil, jsonErr
  }

  return results.Results_Array, nil
}

func PrintResults(resultsArray []string) {

  fmt.Println("\nRESULTS FROM EXECUTION OF FIZZBUZZ CLOUD FUNCTION:")
  fmt.Println("\n--------------------------------------------------\n")
  for _, result := range resultsArray {

    fb_string := fmt.Sprintf("GOT: %v\n", result)
    fmt.Println(fb_string)

  }
}

func SendMaxRangeToClient(maxRange int, w http.ResponseWriter)(error) {
  data := models.MaxRange{Max_Range: maxRange}

  jsonData, err := json.Marshal(data)
  if err != nil {
    return err
  }

  w.Header().Set("Content-Type", "application/json")
  w.Write(jsonData)

  return nil
}

func SendResultsToClient(resultsArray []string, w http.ResponseWriter)(error) {
  data := models.ResultsArray{Results_Array: resultsArray}

  jsonData, err := json.Marshal(data)
  if err != nil {
    return err
  }

  w.Header().Set("Content-Type", "application/json")
  w.Write(jsonData)

  return nil
}

func SendError(statusCode int, errorMessage string, w http.ResponseWriter) {
  errorResponse := models.ErrorResponse{Status: statusCode, Message: errorMessage}

  jsonData, err := json.Marshal(errorResponse)
  if err != nil {
    w.WriteHeader(statusCode)
    w.Write([]byte("An additional error creating an error message. Please examing the Docker logs."))
    return
  }

  w.WriteHeader(statusCode)
  w.Header().Set("Content-Type", "application/json")
  w.Write(jsonData)

}
