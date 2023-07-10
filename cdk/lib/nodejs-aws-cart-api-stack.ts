import * as cdk from 'aws-cdk-lib';
import * as apiGateway from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import * as path from 'path';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export class NodejsAwsCartApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const nodeJsFunctionShared = {
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        PRODUCT_AWS_REGION: process.env.PRODUCT_AWS_REGION!,
        RDS_HOST: process.env.RDS_HOST!,
        RDS_PORT: process.env.RDS_PORT!,
        RDS_USER: process.env.RDS_USER!,
        RDS_PASSWORD: process.env.RDS_PASSWORD!,
        RDS_DATABASE: process.env.RDS_DATABASE!
      },
      bundling: {
        externalModules: [
          'class-transformer',
          '@nestjs/microservices',
          '@nestjs/websockets/socket-module',
          '@nestjs/microservices/microservices-module',
          '@nestjs/microservices',
          'class-validator',
        ],
      },
    }

    const cartApiHandler = new NodejsFunction(this, 'cartApiHandler', {
      ...nodeJsFunctionShared,
      entry: path.join(__dirname,'../../dist/src/main.js'),
      functionName: 'cartApiHandler',
      handler: 'cartApiHandler',
    });

    const httpApi = new apiGateway.HttpApi(this, 'CartHttpApi', {
      apiName: 'Cart Http Api',
      corsPreflight: {
        allowHeaders: ['*'],
        allowOrigins: ['*'],
        allowMethods: [apiGateway.CorsHttpMethod.ANY]
      }
    });

    const cartApiIntegration = new HttpLambdaIntegration('cartIntegration', cartApiHandler);
    httpApi.addRoutes({
      path: '/{proxy+}',
      methods: [apiGateway.HttpMethod.ANY],
      integration: cartApiIntegration
    });
  }
}
