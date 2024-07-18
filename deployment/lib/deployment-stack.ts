import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class DeploymentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cartApiLambda = new lambda.Function(this, 'CartApiLambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset('../dist', {
        exclude: ['*.d.ts'],
      }),
      handler: 'main.handler',
      environment: {},
    });

    const api = new apigateway.RestApi(this, 'CartServiceApi', {
      deploy: true,
      defaultMethodOptions: {
        apiKeyRequired: true,
      },
    });

    api.root.addMethod('ANY', new apigateway.LambdaIntegration(cartApiLambda, {
      proxy: true,
    }));

    api.root.addProxy({
      defaultIntegration: new apigateway.LambdaIntegration(cartApiLambda, {
        proxy: true,
      }),
    });

    const apiKey = api.addApiKey('ApiKey');

    const usagePlan = api.addUsagePlan('UsagePlan', {
      name: 'UsagePlan',
      apiStages: [
        {
          api,
          stage: api.deploymentStage,
        },
      ],
    });

    usagePlan.addApiKey(apiKey);
  }
}
