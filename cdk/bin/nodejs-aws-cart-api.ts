#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NodejsAwsCartApiStack } from '../lib/nodejs-aws-cart-api-stack';

const app = new cdk.App();
new NodejsAwsCartApiStack(app, 'NodejsAwsCartApiStack', {});