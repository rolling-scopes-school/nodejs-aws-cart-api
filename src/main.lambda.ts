import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import helmet from 'helmet';
import { AppModule } from './app.module';

import { configure } from '@vendia/serverless-express';

// Init app and set up serverless express once when lambda starts
let memoizedServer: any;

async function bootstrap() {
  if (!memoizedServer) {
    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    app.enableCors({
      origin: (req, callback) => callback(null, true),
    });
    app.use(helmet());

    await app.init();
    memoizedServer = configure({ app: expressApp });
  }
  return memoizedServer;
}

export const handler = async (event: any, context: any, callback: any) => {
  const server = await bootstrap();
  // console.log(event)
  const result = await server(event, context, callback);
  return result;
};
