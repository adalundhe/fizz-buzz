FROM golang:1.8

ENV FUNCTION_URL=https://us-central1-my-project-1531191240022.cloudfunctions.net/fizz-buzz
ENV MAX_RANGE=15

RUN mkdir -p /go
RUN mkdir -p /go/src/
RUN mkdir -p /go/src/scorbettUM
RUN mkdir -p /go/src/scorbettUM/fizz_buzz
RUN mkdir -p /go/src/scorbettUM/fizz_buzz/server

RUN bash set_env.sh

ADD . /go/src/github.com/scorbettUM/fizz_buzz/server

WORKDIR /go/src/github.com/scorbettUM/fizz_buzz/server
COPY . /go/src/github.com/scorbettUM/fizz_buzz/server

RUN go get -d -v ./
RUN go install -v ./

ENTRYPOINT /go/bin/server

EXPOSE 8000
