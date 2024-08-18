import { NestFactory } from '@nestjs/core';

import helmet from 'helmet';

import { AppModule } from './app.module';

const port = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());

  await app.listen(port);
}
bootstrap().then(() => {
  console.log('App is running on %s port', port);
});

// import { NestFactory } from '@nestjs/core';
// import helmet from 'helmet';
// import { AppModule } from './app.module';
// import { Callback, Context, Handler } from 'aws-lambda';
// import serverlessExpress from '@codegenie/serverless-express';

// let server: Handler;

// async function bootstrap(): Promise<Handler> {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors({
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     credentials: true,
//     allowedHeaders:
//       'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//   });
//   app.use(helmet());

//   await app.init();
//   const expressApp = app.getHttpAdapter().getInstance();
//   return serverlessExpress({ app: expressApp });
// }

// export const handler: Handler = async (
//   event: any,
//   context: Context,
//   callback: Callback,
// ) => {
//   console.log('Handler event', event);

//   server = server ?? (await bootstrap());
//   console.log('ok');
//   return server(event, context, callback);
// };
