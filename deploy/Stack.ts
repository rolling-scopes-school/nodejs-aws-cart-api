import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const server = new nodejs.NodejsFunction(this, 'server', {
      functionName: 'nodejs-aws-cart-api',
      entry: 'dist/main.lambda.js',
      timeout: cdk.Duration.seconds(30),
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_20_X,
      environment: {
        RDS_CONNECTION_URL: '<UPDATED_ME>',
      },
      bundling: {
        externalModules: [
          '@nestjs/microservices',
          '@nestjs/websockets',
          'class-transformer',
          'class-validator',
        ],
      },
    });

    // exposes the lambda function via HTTP URL
    const { url } = server.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: { allowedOrigins: ['*'] },
    });

    new cdk.CfnOutput(this, 'Url', { value: url });
  }
}
