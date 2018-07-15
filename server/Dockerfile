FROM golang:1.8

WORKDIR /go/src/github.com/scorbettUM/fizz_buzz/server
COPY . .

RUN go get -d -v ./
RUN go install -v ./
