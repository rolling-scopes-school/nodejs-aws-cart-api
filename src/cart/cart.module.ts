import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cart as CartEntity } from 'src/entities/Cart.entity';
import { CartItem as CartItemEntity } from 'src/entities/CartItem.entity';
import { User as UserEntity } from 'src/entities/User.entity';
import { Product as ProductEntity } from 'src/entities/Product.entity';

@Module({
  imports: [
    OrderModule,
    TypeOrmModule.forFeature([
      CartEntity,
      CartItemEntity,
      UserEntity,
      ProductEntity,
    ]),
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
