import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from '../order/order.module';
import { Cart } from './cart.entity';
import { CartController } from './cart.controller';
import { CartService } from './services';


@Module({
  imports: [ TypeOrmModule.forFeature([Cart]), OrderModule ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
