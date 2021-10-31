run_setup:
	cp .env.staging .env.local
	npm install

run_lint:
	npm run lint

run_local:
	npm run dev

run_docker:
	docker build --tag logee:dev .
	docker run --name logeeserver -d -p 3004:3004 logee:dev
