import { forwardRef, Module } from '@nestjs/common';
import { OrderService } from './services';
import { DatabaseModule } from 'src/database/database.module';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports: [forwardRef(() => DatabaseModule), forwardRef(() => CartModule)],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
