install:
	@yarn --dev --pure-lockfile

app:
	yarn start

test:
	yarn test

build:
	yarn build

lint:
	npx eslint src --color

deploy:
	git checkout deploy
	git reset --hard main
	make build
	git add -f --all docs/
	git commit -m "new deployment"
	git push --force origin deploy
	git checkout main
