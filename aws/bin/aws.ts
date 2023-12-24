#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as dotenv from 'dotenv';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apiGateway from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';

const environment = {};
dotenv.config({ processEnv: environment });

const app = new cdk.App();

const stack = new cdk.Stack(app, 'CartServiceStack', {
  env: {
    region: 'eu-north-1',
  },
});

const cartService = new NodejsFunction(stack, 'CartServiceLambda', {
  runtime: Runtime.NODEJS_18_X,
  functionName: 'cartService',
  entry: '../dist/main.js',
  environment,
  bundling: {
    externalModules: [
      'mysql',
      'mysql2',
      'pg-query-stream',
      'better-sqlite3',
      'sqlite3',
      'tedious',
      'better-sqlite3',
      'oracledb',
      '@nestjs/microservices',
      '@nestjs/microservices/microservices-module',
      '@nestjs/websockets/socket-module',
    ],
  },
});

const api = new apiGateway.HttpApi(stack, 'CartApiGateway', {
  corsPreflight: {
    allowHeaders: ['*'],
    allowOrigins: ['*'],
    allowMethods: [apiGateway.CorsHttpMethod.ANY],
  },
});

api.addRoutes({
  path: '/{api+}',
  methods: [apiGateway.HttpMethod.ANY],
  integration: new HttpLambdaIntegration(
    'CartServiceLambdaIntegration',
    cartService,
  ),
});

new cdk.CfnOutput(stack, 'ApiUrl', {
  value: api.url || '',
});
