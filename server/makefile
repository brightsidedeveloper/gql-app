PHONY: up down down-clean psql gen

include .env
export

up:
	docker compose up -d

down:
	docker compose down

down-clean:
	docker compose down -v

migrate-up:
	migrate -path migrations \
	        -database "postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${DB_PORT}/${POSTGRES_DB}?sslmode=disable" \
	        up

migrate-down:
	migrate -path migrations \
	        -database "postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${DB_PORT}/${POSTGRES_DB}?sslmode=disable" \
	        down 1

migrate-create:
	@read -p "Enter migration name (snake_case): " name; \
	migrate create -ext sql -dir migrations -seq $$name

psql:
	psql "postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${DB_PORT}/${POSTGRES_DB}?sslmode=disable"

gen:
	go tool gqlgen generate

