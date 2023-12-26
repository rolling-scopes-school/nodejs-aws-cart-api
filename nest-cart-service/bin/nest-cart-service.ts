#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NestCartServiceStack } from '../lib/nest-cart-service-stack';
import * as dotenv from 'dotenv';
dotenv.config();

const app = new cdk.App();
new NestCartServiceStack(app, 'NestCartServiceStack', { env: { account: process.env.ACCOUNT, region: process.env.REGION }});
app.synth();
