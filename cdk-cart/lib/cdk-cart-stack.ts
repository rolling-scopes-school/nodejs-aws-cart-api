import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { RestApi, LambdaIntegration } from "aws-cdk-lib/aws-apigateway";

export class CdkCartStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
   
    const NestJsLambda = new Function(this, 'NestJsLambda', {
      code: Code.fromAsset('../dist', {
        exclude: ['node_modules'],
      }),
      handler: 'main.handler',
      runtime: Runtime.NODEJS_20_X,
    });
    
    const restApi = new RestApi(this, 'LambdaApi', {
      restApiName: 'NestJS REST API'
    });
    
    const proxyResource = restApi.root.addResource('{proxy+}');
    proxyResource.addMethod('ANY',new LambdaIntegration(NestJsLambda));
  }
}
