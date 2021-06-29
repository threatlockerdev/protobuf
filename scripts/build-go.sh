#!/bin/sh
set -e

function build_go() {
  input="$1"
  input_file=$(basename "$input")
  input_dir=$(dirname "$input")
  output="${2:-.}"

  cd "$input_dir"
  mkdir -p "$output"
  protoc \
    --go_out="$output" \
    --go_opt=paths=source_relative \
    --go-grpc_out="$output" \
    --go-grpc_opt=paths=source_relative \
    "$input_file";
}

build_go v3/agent/machine.proto
