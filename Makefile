DOCKER_IMAGE=ghcr.io/hyperqube-io/protobuf
PWD = $(shell pwd)

all:
	docker run -it --rm \
		-v "$(PWD):/go/src/hyperqube.io/protobuf" \
		"$(DOCKER_IMAGE)"

shell:
	docker run -it --rm \
		-v "$(PWD):/go/src/hyperqube.io/protobuf" \
		"$(DOCKER_IMAGE)" sh

docker:
	docker build -t "$(DOCKER_IMAGE)" .
