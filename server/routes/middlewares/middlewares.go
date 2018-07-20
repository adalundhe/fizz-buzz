package middlewares

import(
  tools"github.com/scorbettUM/fizz_buzz/server/tools/functions"
  "net/http"
  "os"
)

func CorsHandler(h http.Handler) http.HandlerFunc {
  return func(w http.ResponseWriter, r *http.Request) {
    
    client_http := os.Getenv("CLIENT_HTTP")
    if client_http == "" {
      tools.SendError(http.StatusInternalServerError, "Error: No client proxy found.", w)
    }

    if (r.Method == "OPTIONS") {
      w.Header().Set("Access-Control-Allow-Origin", client_http)
      w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    } else {
      w.Header().Set("Access-Control-Allow-Origin", client_http)
      w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
      h.ServeHTTP(w,r)
    }
  }
}
