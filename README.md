# nodejs-aws-cart-api

## installation
```bash
npm i && (cd cdk && npm i)
```

create .env file and put there vars from env.example file. Replace values as needed

apply migrations to the database
```bash
npm run knex:migrate:latest
```

## build and deploy
```bash
npm run build && (cd cdk && cdk synth && cdk deploy)
```


To create user and get basic auth token via cli run
```bash
./get-token.sh
```


## Migrations
generate empty migration
```sh
npm run knex:migrate:make your-new-migration-name 
```

run migrations
```sh
npm run knex:migrate:latest
```

generate empty seed migration
```sh
npm run knex:seed:make
```

run seed migrations
```sh
npm run knex:seed:run
```

### Tests
Before running test run postgres in docker container
```bash
docker compose up -d
```
## Unit tests
```bash
npm run test
```

## E2E test
```bash
npm run test:e2e
```

