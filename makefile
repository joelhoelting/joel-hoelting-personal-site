setup:
	docker volume create nodemodules
install:
	docker-compose run --rm install
dev:
	docker-compose run --rm --service-ports dev
build:
	docker-compose run --rm build