import { Module } from '@nestjs/common';
import { OrderModule } from '../order/order.module';
import { CartController } from './cart.controller';
import { CartService } from './services';
import { CartRepository } from './services/cart.repository';
import { DatabaseModule } from 'src/database/pg/database.module';

@Module({
  imports: [OrderModule, DatabaseModule],
  providers: [CartService, CartRepository],
  controllers: [CartController],
})
export class CartModule {}
