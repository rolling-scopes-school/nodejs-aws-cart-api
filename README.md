# nodejs-aws-cart-api

## installation
```bash
npm i
```

## Running the app
create .env file and put there vars from env.example file. Replace values as needed

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
`````
