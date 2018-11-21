PROJECT_NAME := skynet_ai_frontend
IMAGE_LOCATION := .

.PHONY: requirements build run kill

requirements:
	@echo 'Install requirements'
	docker pull beevolop/ionic:latest

build:
	@echo 'Build docker image from Dockerfile'
	docker build -q -t $(PROJECT_NAME):latest $(IMAGE_LOCATION)

run:
	@echo 'Run docker image as a container'
	docker run --rm --net host --name $(PROJECT_NAME) -p 8100:8100 $(PROJECT_NAME):latest
		# -d

kill:
	@echo 'Kill docker container if running'
	docker kill $(PROJECT_NAME) || true