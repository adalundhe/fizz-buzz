package routes

import (
  "os"
  "net/http"
  "fmt"
  "encoding/json"
  // "strconv"
  // "bytes"
  "io/ioutil"
  "time"
)

type MaxRange struct {
  max_range int

}

type ResultsArray struct {
  Results_Array []string `json: results_array`
}

func Index(w http.ResponseWriter, r *http.Request) {
  return
}

func ExecuteFizzBuzz(w http.ResponseWriter, r *http.Request){

    client := http.Client{
      Timeout: time.Second * 2, // Maximum of 2 secs
    }

    googleFunctionUrl := os.Getenv("FUNCTION_URL")

    // maxRange, err := strconv.Atoi(os.Getenv("MAX_RANGE"))
    //
    // fmt.Printf("%v", maxRange)
    //
    // if err != nil {
    //   panic(err)
    // }

    // maxRangeData := &MaxRange{max_range: maxRange}
    //
    // data, err := json.Marshal(maxRangeData)
    //
    // fmt.Println("%v", data)
    // , bytes.NewBuffer(data)

    request, err := http.NewRequest(http.MethodGet, googleFunctionUrl, nil)
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

    results := ResultsArray{}

    jsonErr := json.Unmarshal(body, &results)
    if jsonErr != nil {
      panic(err)
    }
    fmt.Println(results.Results_Array)

}
