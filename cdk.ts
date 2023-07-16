import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apiGateway from "@aws-cdk/aws-apigatewayv2-alpha";
import { HttpLambdaIntegration } from "@aws-cdk/aws-apigatewayv2-integrations-alpha";
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();

const stack = new cdk.Stack(app, 'CartServiceStack', {
  env: { region : process.env.AWS_REGION! },
});

const sharedLambdaProps: Partial<NodejsFunctionProps> = {
  runtime: lambda.Runtime.NODEJS_18_X,
  environment: {
    PRODUCT_AWS_REGION: process.env.AWS_REGION!,
    PG_HOST: process.env.PG_HOST!,
    PG_PORT: process.env.PG_PORT!,
    PG_DATABASE: process.env.PG_DATABASE!,
    PG_USERNAME: process.env.PG_USERNAME!,
    PG_PASSWORD: process.env.PG_PASSWORD!,
  },
  bundling: {
    externalModules: [
      'pg-native',
      'sqlite3',
      'pg-query-stream',
      'oracledb',
      'better-sqlite3',
      'tedious',
      'mysql',
      'mysql2',
    ],
  },
};

// Create CartApiLambda
const cartApiLambda = new NodejsFunction(stack, 'CartApiLambda', {
    ...sharedLambdaProps,
    functionName: 'CartApi',
    entry: 'dist/src/main.js',
    handler: 'handler',
    timeout: cdk.Duration.seconds(10),
  });

// init HttpApi
const api = new apiGateway.HttpApi(stack, 'CartApi', {
    corsPreflight: {
      allowHeaders: ['*'],
      allowOrigins: ['*'],
      allowMethods: [apiGateway.CorsHttpMethod.ANY],
    },
  });

// Add / route
api.addRoutes({
    integration: new HttpLambdaIntegration('cartApiIntegration', cartApiLambda),
    path: '/{proxy+}',
    methods: [apiGateway.HttpMethod.ANY],
  });

