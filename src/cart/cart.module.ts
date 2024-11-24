import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { CartItemEntity } from './entities/cart-item.entity';
import { ProductEntity } from './entities/product.entity';



@Module({
  imports: [ OrderModule, TypeOrmModule.forFeature([CartEntity, CartItemEntity, ProductEntity]), ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
