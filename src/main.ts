import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import * as serverlessExpress from '@vendia/serverless-express';
import { Handler, Callback } from 'aws-lambda';

const port = process.env.PORT || 4000;

async function createApp() {
  const app = await NestFactory.create(AppModule);

  // const config = new DocumentBuilder()
  //   .setTitle('Aws Cart Api')
  //   .setDescription('AWS Cart Api documentation')
  //   .setVersion('1.0.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('swagger', app, document);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());

  return app;
}

let server: Handler;

async function bootstrap(event?: APIGatewayProxyEvent, context?: Context) {
  const app = await createApp();
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress.configure({ app: expressApp });
}

export const cartApiHandler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

// Start the local server if not running in AWS Lambda
if (!process.env.AWS_EXECUTION_ENV) {
  (async () => {
    const app = await createApp();
    await app.listen(port);
    console.log('App is running on %s port', port);
  })();
}
