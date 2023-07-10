import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import path from "path";
import * as path from 'path';
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apiGateway from 'aws-cdk-lib/aws-apigateway';

export class NestRwcCartStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const nestAppLambda = new NodejsFunction(this, 'nestApp', {
      functionName: 'nestAppLambda',
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, '../src/main.js'),
      // entry: '../src/main.js',
      handler: 'handler',
      // environment: {
      //   TEST_GITHUB_ACCOUNT_LOGIN,
      //   TEST_PASSWORD
      // },
      bundling: {
        externalModules: [
            '@nestjs/websockets/socket-module',
            '@nestjs/microservices/microservices-module',
            '@nestjs/microservices',
            'class-transformer',
            'class-validator',
            // '@vendia/serverless-express'
        ]
      }
    });

    const api = new apiGateway.LambdaRestApi(this, 'NestApiGateway', {
      handler: nestAppLambda,
    });
  }
}
