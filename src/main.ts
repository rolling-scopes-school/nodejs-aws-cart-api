import { NestFactory } from '@nestjs/core';

// import helmet from 'helmet';

import { AppModule } from './app.module';
import { APIGatewayProxyEvent, Handler, Context, Callback } from 'aws-lambda';
import { configure } from '@codegenie/serverless-express';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();

  return configure({ app: expressApp });
}

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  const res = await server(event, context, callback);

  return {
    statusCode: res.statusCode,
    body: JSON.stringify({
      res,
      event,
    }),
  };
};
