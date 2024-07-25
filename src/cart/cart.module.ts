import { forwardRef, Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [forwardRef(() => DatabaseModule), forwardRef(() => OrderModule)],
  providers: [CartService],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}
