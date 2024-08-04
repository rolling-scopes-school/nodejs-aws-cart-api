import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import { join } from 'path';
import * as rds from '@aws-cdk/aws-rds';
import * as ec2 from '@aws-cdk/aws-ec2';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'VPC');

    const database = new rds.DatabaseInstance(this, 'UserServiceDB', {
      engine: rds.DatabaseInstanceEngine.postgres({ version: rds.PostgresEngineVersion.VER_12_4 }),
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.MICRO),
      credentials: rds.Credentials.fromGeneratedSecret('admin'),
      databaseName: 'userdb',
      publicly accessible: true,
  });

    const userServiceLambda = new lambda.Function(this, 'UserServiceLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'lambda.handler',
      code: lambda.Code.fromAsset(join(__dirname, '..', '..', 'dist')),
      environment: {
        NODE_ENV: 'production',
        DB_HOST: database.dbInstanceEndpointAddress,
        DB_PORT: database.dbInstanceEndpointPort,
        DB_USERNAME: database.secret?.secretValueFromJson('username')?.toString() || '',
        DB_PASSWORD: database.secret?.secretValueFromJson('password')?.toString() || '',
        DB_NAME: 'userdb',
      },
    });

    const api = new apigateway.RestApi(this, 'userServiceApi', {
      restApiName: 'User Service',
      description: 'This service serves users.',
    });

    const getUsersIntegration = new apigateway.LambdaIntegration(userServiceLambda);
    api.root.addMethod('GET', getUsersIntegration);
  }
}
