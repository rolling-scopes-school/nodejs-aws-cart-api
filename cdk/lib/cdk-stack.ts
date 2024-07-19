import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

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
        port: +process.env.DATABASE_PORT!,
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
  }
}
