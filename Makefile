compose := docker compose
run := $(compose) run --rm
defaultService := node

node_modules/time:
	$(run) -T $(defaultService) yarn
	$(run) -T $(defaultService) yarn install:husky
	touch node_modules/time

dist/time:
	$(MAKE) build

.PHONY: shell
shell:
	$(run) $(defaultService) /bin/bash

.PHONY: format
format: node_modules/time
	$(run) -T -v ~/.gitconfig:/home/node/.gitconfig $(defaultService) yarn format

.PHONY: lint
lint: node_modules/time
	$(run) -T $(defaultService) yarn lint

.PHONY: test
test: node_modules/time
	$(run) $(defaultService) yarn test

.PHONY: test-watch
test-watch: node_modules/time
	$(run) $(defaultService) yarn test:watch

.PHONY: build
build: node_modules/time
	$(run) $(defaultService) yarn build
	$(run) $(defaultService) yarn build:doc
	touch dist/time

.PHONY: publish
publish: dist/time
	$(run) $(defaultService) npm login && npm publish

.PHONY: clean
clean:
	$(compose) down --volumes