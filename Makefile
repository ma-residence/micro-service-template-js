# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help all

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

# Default env
ENV = dev

UID := $(shell id -u)
GID := $(shell id -g)

DOCKER_COMPOSE_BIN = docker-compose
DOCKER_COMPOSE = $(DOCKER_COMPOSE_BIN)
PACKAGE=

ifeq ($(DOCKER), false)
	APP =
	CD_APP =
else
	APP = docker exec -ti $$(docker-compose ps -q templatejs)
	CD_APP = cd /srv/templatejs &&
endif

bash-app: ## bash
	$(APP) bash

prepare: ## npm install
	$(APP) npm install

install: ## npm install
	$(APP) npm install --save $(PACKAGE)

upgrade: ## mpm upgrade
	$(APP) npm upgrade

lint: ## npm run lint:fix && lint:fix-test
	$(APP) npm run lint:fix
	$(APP) npm run lint:fix-test

test: ## npm run test
	$(APP) npm run test

test-travis: ## npm run test:travis
	$(APP) npm run test:travis
