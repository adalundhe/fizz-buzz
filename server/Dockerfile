FROM golang:1.8

ENV FUNCTION_URL=https://us-central1-my-project-1531191240022.cloudfunctions.net/fizz-buzz
ENV MAX_RANGE=15

ADD . /go/src/github.com/scorbettUM/fizz_buzz/server

WORKDIR /go/src/github.com/scorbettUM/fizz_buzz/server
COPY . .

RUN go get -d -v ./
RUN go install -v ./

ENTRYPOINT /go/bin/server

EXPOSE 8000
