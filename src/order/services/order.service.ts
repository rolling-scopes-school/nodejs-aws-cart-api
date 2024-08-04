import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../order.entity';
import { Order } from '../models';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<Order>,
  ) {}

  private orders: Record<string, Order> = {}

  findById(orderId: string): Order {
    return this.orders[ orderId ];
  }

  create(data: any) {
    const id = v4()
    const order = {
      ...data,
      id,
      status: 'inProgress',
    };

    this.orders[ id ] = order;
    this.orderRepository.save(order);
    return order;
  }

  update(orderId, data) {
    const order = this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    this.orders[ orderId ] = {
      ...data,
      id: orderId,
    }
  }
}
