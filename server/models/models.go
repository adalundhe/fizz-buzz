package models

type MaxRange struct {
  Max_Range int `json:"max_range"`

}

type ResultsArray struct {
  Results_Array []string `json:"results_array"`
}

type ErrorResponse struct {
  Status int `json:"status"`
  Message string `json:"message"`
}
