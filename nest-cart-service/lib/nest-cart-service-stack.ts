import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apiGw from 'aws-cdk-lib/aws-apigateway';
import * as dotenv from 'dotenv';
dotenv.config();

export class NestCartServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const nestCartApiLambda = new NodejsFunction(this, 'nestCartApiLambda', {
      entry: 'dist/src/main.js',
      handler: 'handler',
      memorySize: 1024,
      timeout: cdk.Duration.seconds(30),
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        RDS_HOST: process.env.RDS_HOST as string,
        RDS_PORT: process.env.RDS_PORT as string,
        RDS_DATABASE: process.env.RDS_DATABASE as string,
        RDS_USERNAME: process.env.RDS_USERNAME as string,
        RDS_PASSWORD: process.env.RDS_PASSWORD as string,
      },
      bundling: {
        minify: true,
        externalModules: [
          'class-validator',
          'class-transformer',
          'oracledb',
          'tedious',
          'pg-query-stream',
          'mysql',
          'sqlite3',
          'mysql2',
        ],
      },
    });

    const restApi = new apiGw.LambdaRestApi(this, 'NestCartServiceRestApi', {
      handler: nestCartApiLambda,
    });

    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: restApi.url ?? '',
    });
  }
}
