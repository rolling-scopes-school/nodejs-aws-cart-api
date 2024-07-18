import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Context, Handler } from 'aws-lambda';
const express = require('express');
const serverlessExpress = require('@vendia/serverless-express')

import { AppModule } from './app.module';

let cachedServer: Handler;

export async function bootstrap() {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    nestApp.enableCors();
    await nestApp.init();
    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: any,
) => {
  console.log(`Event received: ${JSON.stringify(event)}`);
  const server = await bootstrap();
  return server(event, context, callback);
};


module.exports.handler = handler;
