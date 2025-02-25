.PHONY: build local-setup run run-format run-lint run-terminal

build:
	@docker compose build

local-setup: build
	@docker compose run --rm web npm i

# the dev server requires a TTY or it will crash; `run` gives us that but `up`
# will not without adding it to the compose spec.
run:
	@docker compose run --rm --service-ports web

run-format:
	@docker compose run --rm web npm run format

run-lint:
	@docker compose run --rm web npm run lint

run-terminal:
	@docker compose run --rm web bash
