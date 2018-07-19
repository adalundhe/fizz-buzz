FROM node:latest

ENV HTTP_PROXY=http://localhost:8000
# Create app directory


RUN mkdir -p /go
RUN mkdir -p /go/src/
RUN mkdir -p /go/src/scorbettUM
RUN mkdir -p /go/src/scorbettUM/fizz_buzz
RUN mkdir -p /go/src/scorbettUM/fizz_buzz/client

WORKDIR /go/src/scorbettUM/fizz_buzz/client

COPY package.json /go/src/scorbettUM/fizz_buzz/client

RUN npm install

CMD [ "npm", "start" ]
