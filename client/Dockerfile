FROM node:latest

ENV HTTP_PROXY=http://localhost:8000

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory


RUN mkdir -p /go
RUN mkdir -p /go/src/
RUN mkdir -p /go/src/scorbettUM
RUN mkdir -p /go/src/scorbettUM/fizz_buzz
RUN mkdir -p /go/src/scorbettUM/fizz_buzz/client

WORKDIR /go/src/scorbettUM/fizz_buzz/client

COPY . /go/src/scorbettUM/fizz_buzz/client

RUN npm run build --production
RUN npm install -g serve
CMD serve -s build

EXPOSE 5000
