import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';


import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
// entities
import { CartItem as CartItemEntity } from './entities/CartItem.entity';
import { Cart as CartEntity } from './entities/Cart.entity';
import { Order as OrderEntity } from './entities/Order.entity';
import { User as UserEntity } from './entities/User.entity';
import { Product as ProductEntity } from './entities/Product.entity';

dotenv.config();

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        CartItemEntity,
        CartEntity,
        OrderEntity,
        UserEntity,
        ProductEntity,
      ],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
