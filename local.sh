#!/bin/bash

if [ ! -f .env ]; then
  echo ".env file does not exist. Run command:"
  echo "cat env.example > .env"
  exit 1
fi

source .env

npm run build && (cd cdk  && cdk synth)

sam build -t ./cdk/cdk.out/CartStack.template.json

sam local start-api  \
  --docker-network rss-aws-shop-backend_cdk-test-network \
  --warm-containers EAGER --port 4000 --debug
