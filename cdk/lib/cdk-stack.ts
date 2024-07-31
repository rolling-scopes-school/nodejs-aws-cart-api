/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { HttpMethod } from 'aws-cdk-lib/aws-events';
import { config } from 'dotenv';
import path = require('path');

config({
  path: path.resolve(__dirname, '../../.env'),
});

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const nestLambda = new lambda.Function(this, 'NestWrapper', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset('../dist'),
      handler: 'main.handler',
      environment: {
        DEV_POSTGRES_HOST: process.env.DEV_POSTGRES_HOST!,
        DEV_POSTGRES_PORT: process.env.DEV_POSTGRES_PORT!,
        DEV_POSTGRES_USER: process.env.DEV_POSTGRES_USER!,
        DEV_POSTGRES_PASSWORD: process.env.DEV_POSTGRES_PASSWORD!,
        DEV_POSTGRES_DB_NAME: process.env.DEV_POSTGRES_DB_NAME!,
        TEST_AWS_REGION: process.env.TEST_AWS_REGION!,
        TEST_DYNAMO_DB_URL: process.env.TEST_DYNAMO_DB_URL!,
        TEST_DYNAMO_DB_ACCESS_KEY_ID: process.env.TEST_DYNAMO_DB_ACCESS_KEY_ID!,
        TEST_DYNAMO_DB_SECRET_ACCESS_KEY:
          process.env.TEST_DYNAMO_DB_SECRET_ACCESS_KEY!,
        NODE_ENV: process.env.NODE_ENV!,
      },
      timeout: cdk.Duration.seconds(15),
    });

    const api = new RestApi(this, 'TestApi', {
      defaultCorsPreflightOptions: {
        allowOrigins: ['*'],
        allowHeaders: ['*'],
        allowMethods: ['*'],
        maxAge: cdk.Duration.days(30),
      },
    });
    const integration = new LambdaIntegration(nestLambda);

    api.root.addMethod(lambda.HttpMethod.GET, integration);

    const pingEndpoint = api.root.addResource('ping');
    pingEndpoint.addMethod(HttpMethod.GET, integration);

    const apiEndpoint = api.root.addResource('api');

    const authEndpoint = apiEndpoint.addResource('auth');

    const registerEndpoint = authEndpoint.addResource('register');
    registerEndpoint.addMethod(HttpMethod.POST, integration);

    const loginEndpoint = authEndpoint.addResource('login');
    loginEndpoint.addMethod(HttpMethod.POST, integration);

    const profileEndpoint = apiEndpoint.addResource('profile');
    profileEndpoint.addMethod(HttpMethod.GET, integration);

    const cartEndpoint = profileEndpoint.addResource('cart');
    cartEndpoint.addMethod(HttpMethod.GET, integration);
    cartEndpoint.addMethod(HttpMethod.PUT, integration);
    cartEndpoint.addMethod(HttpMethod.DELETE, integration);

    const checkoutEndpoint = cartEndpoint.addResource('order');
    checkoutEndpoint.addMethod(HttpMethod.GET, integration);

    checkoutEndpoint.addMethod(HttpMethod.PUT, integration);
  }
}
