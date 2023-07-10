#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NestRwcCartStack } from '../lib/nest-rwc-cart-stack';

const app = new cdk.App();
new NestRwcCartStack(app, 'NestRwcCartStack');
