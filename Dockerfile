FROM golang:1.16-alpine

RUN apk add protobuf

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.27
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1

RUN mkdir -p /go/src/hyperqube.io/protobuf

WORKDIR /go/src/hyperqube.io/protobuf

COPY . .

CMD sh scripts/build-go.sh
