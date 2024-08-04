import { Handler, Context } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { Server } from 'http';
import { config as dotEnvConfig } from 'dotenv';
import { resolve } from 'path';

dotEnvConfig({ path: resolve(__dirname, '.env') });

const expressApp = express();

let server: Server;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
  return expressApp;
}

export const handler: Handler = async (event: any, context: Context) => {
  if (!server) {
    server = await bootstrap();
  }

  return server(event, context);
};
