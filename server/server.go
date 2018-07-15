package main

import (
  routes"github.com/sean_c/fizz_buzz/server/routes"
  "log"
  "net/http"
  "github.com/gorilla/mux"
)

func StartServer(){
  router := mux.NewRouter()
  router.HandleFunc("/fizz_buzz", routes.ExecuteFizzBuzz).Methods("GET")
  log.Fatal(http.ListenAndServe(":8000", router))
}
