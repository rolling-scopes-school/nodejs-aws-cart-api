import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as deployment from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apiGateway from "@aws-cdk/aws-apigatewayv2-alpha";
import { HttpLambdaIntegration } from "@aws-cdk/aws-apigatewayv2-integrations-alpha";
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();

const stack = new cdk.Stack(app, 'CartServiceStack', {
  env: { region : process.env.AWS_REGION! },
});

const cartApiBucket = new s3.Bucket(stack, 'CartApiBucket', {
    bucketName: 'awscdcartapi',
});

const OAI = new cloudfront.OriginAccessIdentity(stack, 'CartApiOAI', {
        comment: cartApiBucket.bucketName,
    },
);

cartApiBucket.grantRead(OAI);

const CFDistribution = new cloudfront.Distribution(stack, 'CartApiCFD', {
    defaultBehavior: {
        origin: new origins.S3Origin(cartApiBucket, {
            originAccessIdentity: OAI,
        }),
        viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    },
    defaultRootObject: 'index.html',
    errorResponses: [
        {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
        },
    ],
});

const sharedLambdaProps: Partial<NodejsFunctionProps> = {
  runtime: lambda.Runtime.NODEJS_18_X,
  environment: {
    PRODUCT_AWS_REGION: process.env.AWS_REGION!,
    PG_HOST: process.env.PG_HOST!,
    PG_PORT: process.env.PG_PORT!,
    PG_DATABASE: process.env.PG_DATABASE!,
    PG_USERNAME: process.env.PG_USERNAME!,
    PG_PASSWORD: process.env.PG_PASSWORD!,
  },
  bundling: {
    externalModules: [
      'pg-native',
      'sqlite3',
      'pg-query-stream',
      'oracledb',
      'better-sqlite3',
      'tedious',
      'mysql',
      'mysql2',
    ],
  },
};

// Create CartApiLambda
const cartApi = new NodejsFunction(stack, 'CartApiLambda', {
    ...sharedLambdaProps,
    functionName: 'CartApi',
    entry: 'src/lambda_handlers/cartApi.ts',
  });

// init HttpApi
const api = new apiGateway.HttpApi(stack, 'ProductApi', {
    corsPreflight: {
      allowHeaders: ['*'],
      allowOrigins: ['*'],
      allowMethods: [apiGateway.CorsHttpMethod.ANY],
    },
  });

// Add / route
api.addRoutes({
    integration: new HttpLambdaIntegration('cartApiIntegration', cartApi),
    path: '/',
    methods: [apiGateway.HttpMethod.ANY],
  });

// Host cartApi bucket on cloudfront
const BucketHosting = new deployment.BucketDeployment(stack, 'AWSStoreBucketDeployment', {
    destinationBucket: cartApiBucket,
    sources: [deployment.Source.asset('./dist')],
    distribution: CFDistribution,
    distributionPaths: ['/*'],
});
