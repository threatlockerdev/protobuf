#!/bin/sh
set -e

npm_dir="../node_modules"
out_dir="../node/generated"

cd src
protoc \
  --plugin="protoc-gen-ts=$npm_dir/.bin/protoc-gen-ts" \
  --plugin="protoc-gen-grpc=$npm_dir/.bin/grpc_tools_node_protoc_plugin" \
  --js_out="import_style=commonjs,binary:$out_dir" \
  --ts_out="service=grpc-node,mode=grpc-js:$out_dir" \
  --grpc_out="grpc_js:$out_dir" \
  *.proto
