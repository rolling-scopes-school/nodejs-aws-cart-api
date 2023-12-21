import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

import helmet from 'helmet';

import { AppModule } from './app.module';

// const port = process.env.PORT || 4000;

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());

 // await app.listen(port);
  
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}
bootstrap().then(() => {
  console.log('App is running on %s port');
});

export const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback,
) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
