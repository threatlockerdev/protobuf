FROM node:14

RUN apt-get update
RUN apt-get install -y protobuf-compiler

WORKDIR /pb/

COPY package.json yarn.lock ./
RUN yarn

CMD sh ./scripts/generate-node.sh
