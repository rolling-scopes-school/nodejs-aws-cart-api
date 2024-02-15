import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import helmet from 'helmet';

import { config } from 'dotenv';

config();

let port = process.env.PORT;

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });

  app.use(helmet());

  await app.listen(port);
}

bootstrap().then(() => {
  console.log(`App is running on port ${port}`);
})



