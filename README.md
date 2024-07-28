# nodejs-aws-cart-api

## installation
```bash
npm i
```

## Running the app
npm i && (cd cdk && npm i)
```

## build and deploy
```bash
npm run build && (cd cdk && cdk synth && cdk deploy)
```

create .env file and put there vars from env.example file. Replace values as needed

Run postgres in docker container with command
```bash
docker compose up -d
```

Then apply migrations with command
```bash
npm run knex:migrate:latest
```

## build
```bash
npm run build
```


## Run in dev mode
```bash
npm run start:dev
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
key `--runInBand` is needed to avoid deadlocks in transactions

## E2E
```bash
npm run test:e2e
```


