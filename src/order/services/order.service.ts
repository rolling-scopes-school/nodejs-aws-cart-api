import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

import { Order } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/database/entities/order.entity';
import { Repository } from 'typeorm';
import { CartItemEntity } from 'src/database/entities/cart-item.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,

    @InjectRepository(CartItemEntity)
    private readonly cartItemRepo: Repository<CartItemEntity>,
  ) {}
  // private orders: Record<string, Order> = {};

  // findById(orderId: string): Order {
  //   return this.orders[orderId];
  // }

  async create(data: Order) {
    try {
      const id = v4();
      const newOrder = this.orderRepo.create({
        id,
        ...data,
      });
      console.log('newOrder', newOrder);
      const order = await this.orderRepo.save(newOrder);

      return order;
    } catch (error) {
      console.log(error);
    }
  }

  // update(orderId, data) {
  //   const order = this.findById(orderId);

  //   if (!order) {
  //     throw new Error('Order does not exist.');
  //   }

  //   this.orders[orderId] = {
  //     ...data,
  //     id: orderId,
  //   };
  // }
}
