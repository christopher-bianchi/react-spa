.PHONY: build

IMAGE_NAME ?= web
IMAGE_TAG ?= latest

build:
	docker compose build
