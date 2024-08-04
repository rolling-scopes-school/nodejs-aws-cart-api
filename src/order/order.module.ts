import { Module } from '@nestjs/common';
import { OrderService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderEntity } from './order.entity';
@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [ OrderService ],
  exports: [ OrderService ],
  controllers: [OrderController],
})
export class OrderModule {}