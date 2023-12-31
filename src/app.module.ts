import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { KnexModule } from 'nestjs-knex';
import { configDotenv } from 'dotenv';
configDotenv();

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: process.env.RDS_HOST as string,
          port: +process.env.RDS_PORT as number,
          database: process.env.RDS_DATABASE as string,
          user: process.env.RDS_USERNAME as string,
          password: process.env.RDS_PASSWORD as string,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
