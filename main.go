package main

import (
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
    fmt.Fprintf(w, "hello\n")
}

func index(w http.ResponseWriter, req *http.Request) {
    fmt.Fprintf(w, "The Go app is rorking !\n")
}

func test(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "test seems to work cool to me too\n")
}

func headers(w http.ResponseWriter, req *http.Request) {

    for name, headers := range req.Header {
        for _, h := range headers {
            fmt.Fprintf(w, "%v: %v\n", name, h)
        }
    }
}

func main() {

    http.HandleFunc("/", index)
    http.HandleFunc("/hello", hello)
    http.HandleFunc("/headers", headers)
	http.HandleFunc("/test", test)

    http.ListenAndServe(":8090", nil)
}