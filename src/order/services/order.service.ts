import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Order } from '../models';
import { CreateOrderPayload, OrderStatus } from '../type';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  getAll(): Promise<Order[]> {
    return this.orderRepository.getAll();
  }

  findById(orderId: string): Promise<Order> {
    return this.orderRepository.getById(orderId);
  }

  async create(data: CreateOrderPayload) {
    const id = randomUUID() as string;
    const order: Order = {
      id,
      ...data,
      statusHistory: [
        {
          comment: '',
          status: OrderStatus.Open,
          timestamp: Date.now(),
        },
      ],
    };

    await this.orderRepository.create(order);
  }

  // TODO add  type
  //TODO IMPLEMENT
  // update(orderId: string, data) {
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
