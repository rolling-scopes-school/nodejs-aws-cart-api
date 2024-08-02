import { Module } from '@nestjs/common';
import { OrderService } from './services';
import { DatabaseModule } from 'src/database/pg/database.module';
import { OrderRepository } from './services/order.repository';

@Module({
  providers: [OrderService, OrderRepository],
  exports: [OrderService],
  imports: [DatabaseModule],
})
export class OrderModule {}
