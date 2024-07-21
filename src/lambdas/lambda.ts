import { Handler, Context, Callback } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { AppModule } from '../app.module';
import { NestFactory } from '@nestjs/core';

let cachedServer: Server;

const bootstrapServer = async (): Promise<Server> => {
  const app = await NestFactory.create(AppModule);
  await app.init();
  return createServer(app.getHttpAdapter().getInstance());
};

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  if (!cachedServer) {
    cachedServer = await bootstrapServer();
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
