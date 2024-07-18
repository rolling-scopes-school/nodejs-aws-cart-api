import * as cdk from 'aws-cdk-lib';
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from 'constructs';
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class DeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // LambdaNestStack in stack.ts
    const handler = new lambda.Function(this, 'NestHandler', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('../dist'), 
      environment: {
        NODE_ENV: 'production',
      },
    });
    // Создание API Gateway
    const api = new apigateway.RestApi(this, 'NestApi');

    const integration = new apigateway.LambdaIntegration(handler);

    // Интеграция с корневым ресурсом
    api.root.addProxy({
      defaultIntegration: integration,
    });

    // Вывод URL API Gateway
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
    });

  }
}
