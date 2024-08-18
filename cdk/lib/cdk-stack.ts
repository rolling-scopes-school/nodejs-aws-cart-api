// Used only in task 8 for lamda integration

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const securityGroupIds = [process.env.DATABASE_SECURITY_GROUP_ID!];

    const cartDB = rds.DatabaseInstance.fromDatabaseInstanceAttributes(
      this,
      'Cart DB',
      {
        instanceIdentifier: process.env.DATABASE_NAME!,
        instanceEndpointAddress: process.env.DATABASE_HOST!,
        instanceResourceId: process.env.DATABASE_RESOURCE_ID!,
        port: 5432,
        securityGroups: securityGroupIds.map((id) =>
          ec2.SecurityGroup.fromSecurityGroupId(
            this,
            `SecurityGroup-${id}`,
            id,
          ),
        ),
      },
    );

    const nestJSFunction = new lambda.Function(this, 'NestJSFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '..', '..', 'dist')),
      handler: 'main.handler',
      environment: {
        DB_HOST: process.env.DATABASE_HOST!,
        DB_PORT: process.env.DATABASE_PORT!,
        DB_NAME: process.env.DATABASE_NAME!,
        DB_USER: process.env.DATABASE_USERNAME!,
        DB_PASSWORD: process.env.DATABASE_PASSWORD!,
      },
    });

    cartDB.grantConnect(nestJSFunction, process.env.DATABASE_USERNAME!);

    const api = new apigateway.RestApi(this, 'cart-api', {
      restApiName: 'Cart Service',
      cloudWatchRole: true,
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: apigateway.Cors.DEFAULT_HEADERS,
        allowCredentials: true,
      },
    });

    const cartResource = api.root.addResource('cart');
    const nestJSLambdaIntegration = new apigateway.LambdaIntegration(
      nestJSFunction,
    );
    cartResource.addMethod('GET', nestJSLambdaIntegration);
    cartResource.addMethod('PUT', nestJSLambdaIntegration);
    cartResource.addMethod('DELETE', nestJSLambdaIntegration);

    const checkoutResource = cartResource.addResource('checkout');
    checkoutResource.addMethod('POST', nestJSLambdaIntegration);

    const deployment = new apigateway.Deployment(this, 'Deployment', { api });

    const devStage = new apigateway.Stage(this, 'dev-stage', {
      stageName: 'dev',
      deployment,
    });

    api.deploymentStage = devStage;
  }
}
