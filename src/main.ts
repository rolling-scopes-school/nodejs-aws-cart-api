import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import helmet from 'helmet';


export async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });

  app.use(helmet());

  await app.listen(4000);
}

bootstrap().then(() => {
  console.log('App is running on port 4000');
})



