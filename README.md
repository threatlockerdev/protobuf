# protobuf

These are HyperQube's gRPC protobuf definitions. Currently, the only server implementation is our [agent](https://github.com/hyperqube-io/v3-agent), and the only client usage is in our [API](https://github.com/hyperqube-io/v3-api).

## Contributing

### Making changes

Protobuf source files are located in `./src`. There's one file per gRPC service, along with several message definitions.

### Generating client libraries

The client libraries are built via Docker "builder" images.

```shell
$ yarn generate:go
...
$ yarn generate:node
```

(If you've added files, you'll probably want to update `node/index.ts`.)

### Publishing a new version

Make sure you've generated new client libraries before publishing!

1. Tag: `npm version [patch|minor|major]`
2. Push: `git push && git push --tags`
3. Publish: `npm publish`
