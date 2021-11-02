run_setup:
	cp .env.staging .env.local
	npm install

run_lint:
	npm run lint

run_local:
	npm run dev

run_docker:
	docker build --tag next12:dev .
	docker run --name next12server -d -p 3004:3004 next12:dev
