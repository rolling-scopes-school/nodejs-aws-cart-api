import { NestFactory } from '@nestjs/core';
import { configure as serverlessExpress } from '@codegenie/serverless-express';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());
  await app.init(); // Инициализация приложения NestJS
  const expressApp = app.getHttpAdapter().getInstance(); // Получение экземпляра Express приложения
  return serverlessExpress({ app: expressApp }); // Возвращение серверного обработчика
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap()); // Инициализация сервера при первом вызове
  return server(event, context, callback); // Обработка запроса
};
