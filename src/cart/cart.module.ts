import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entity/cart.entity';
import { CartItemEntity } from './entity/cart-item.entity';
import { UserEntity } from 'src/users/entity/user.entity';
import { ProductEntity } from './entity/product.entity';



@Module({
  imports: [ OrderModule, TypeOrmModule.forFeature([CartEntity, CartItemEntity, UserEntity, ProductEntity]) ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
