import * as cdk from 'aws-cdk-lib';

import { Stack } from './Stack';

const app = new cdk.App({});

new Stack(app, 'nodejs-aws-cart-api', {
  // env: {
  //   region: 'eu-central-1',
  // },
});
