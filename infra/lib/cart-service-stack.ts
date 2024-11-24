import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cdk from 'aws-cdk-lib';
import { aws_secretsmanager as secretsmanager } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as path from 'path';

export class CartServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dbCredentialsSecret = new secretsmanager.Secret(this, 'MyDBCreds', {
      secretName: 'DBCredsName',
      generateSecretString: {
        secretStringTemplate: JSON.stringify({
          username: 'postgres',
          host: "database-1.clm2y062qkaq.us-east-1.rds.amazonaws.com",
          port: "5432",
          dbname: "database-1"
        }),
        excludePunctuation: true,
        includeSpace: false,
        generateStringKey: 'password'
      }
    });

    const vpc = new ec2.Vpc(this, 'MyVPC', {
      maxAzs: 2, // Default is all AZs in the region
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'PublicSubnet',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

    const dbSecurityGroup = new ec2.SecurityGroup(this, 'DBSecurityGroup', {
      vpc,
      description: 'Allow access to RDS instance from any IP address',
      allowAllOutbound: true,
    });

    dbSecurityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(5432),
      'Allow inbound PostgreSQL access from any IP'
    );

    const dbInstance = new rds.DatabaseInstance(this, 'RDSInstance', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_13_15,
      }),
      databaseName: 'cart',
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.MICRO),
      vpc,
      credentials: rds.Credentials.fromSecret(dbCredentialsSecret),
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC
      },
      securityGroups: [dbSecurityGroup],
      multiAz: false,
      allocatedStorage: 20,
      maxAllocatedStorage: 20,
      allowMajorVersionUpgrade: false,
      autoMinorVersionUpgrade: true,
      backupRetention: cdk.Duration.days(7),
      deleteAutomatedBackups: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      deletionProtection: false,
    });

    const cartServiceLambda = new lambda.Function(this, 'CartServiceLambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '..', '..', 'nodejs-aws-cart-api', 'dist')),
      timeout: cdk.Duration.seconds(20),
      handler: 'lambda.handler',
      environment: {
        DATABASE_HOST: dbCredentialsSecret.secretValueFromJson('host').unsafeUnwrap(),
        DATABASE_PORT: dbCredentialsSecret.secretValueFromJson('port').unsafeUnwrap(),
        DATABASE_USERNAME: dbCredentialsSecret.secretValueFromJson('username').unsafeUnwrap(),
        DATABASE_PASSWORD: dbCredentialsSecret.secretValueFromJson('password').unsafeUnwrap(),
        DATABASE_NAME: dbCredentialsSecret.secretValueFromJson('dbname').unsafeUnwrap(),
      }
    });

    const api = new apigateway.RestApi(this, 'NestApi', {
      restApiName: 'Nest Service',
      description: 'This service serves a Nest.js application.',
    });

    const cartServiceLambdaIntegration = new apigateway.LambdaIntegration(cartServiceLambda);

    api.root.addProxy({
      defaultIntegration: cartServiceLambdaIntegration,
    });
  }
}
