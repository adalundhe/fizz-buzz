package main

import (
  routes"github.com/scorbettUM/fizz_buzz/server/routes"
  "github.com/scorbettUM/server/routes/middlewares"
  "log"
  "net/http"
  "github.com/gorilla/mux"
)

func StartServer(){
  router := mux.NewRouter().PathPrefix("/api").StrictSlash(true)
  router.HandleFunc("/fizz_buzz", routes.ExecuteFizzBuzz).Methods("GET")
  log.Fatal(http.ListenAndServe(":8000", router))
}
