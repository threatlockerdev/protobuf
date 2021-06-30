#!/bin/sh
set -e

cd src
protoc \
  --go_out=../agent \
  --go_opt=paths=source_relative \
  --go-grpc_out=../agent \
  --go-grpc_opt=paths=source_relative \
  *.proto
