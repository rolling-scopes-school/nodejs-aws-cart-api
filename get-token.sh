#!/bin/bash

if [ ! -f .env ]; then
  echo ".env file does not exist. Run command:"
  echo "cat env.example > .env"
  exit 1
fi

source .env

REGISTER_PAYLOAD="{\"name\":\"$GITHUB_ACCOUNT_LOGIN\",\"password\":\"$AUTH_PASSWORD\"}"
LOGIN_PAYLOAD="{\"username\":\"$GITHUB_ACCOUNT_LOGIN\",\"password\":\"$AUTH_PASSWORD\"}"

curl -s --header "Content-Type: application/json" \
  --request POST \
  --data "$REGISTER_PAYLOAD"  "http://localhost:$APP_PORT/api/auth/register" > /dev/null


curl -s --header "Content-Type: application/json" \
  --request POST \
  --data "$LOGIN_PAYLOAD" "http://localhost:$APP_PORT/api/auth/login"
