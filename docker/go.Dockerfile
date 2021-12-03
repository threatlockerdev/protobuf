FROM golang:1.16-alpine

RUN apk add protobuf protobuf-dev

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.27
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1

WORKDIR /go/src/pb

COPY scripts ./scripts

CMD sh ./scripts/generate-go.sh
