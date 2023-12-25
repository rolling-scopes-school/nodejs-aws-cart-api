import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Knex } from 'knex';

import { Order } from '../models';
import pgClient from '../../db';

@Injectable()
export class OrderService {
  private orders: Record<string, Order> = {}

  async findById(orderId: string): Promise<Order> {
    return await pgClient('orders').where('id', orderId).first();
  }

  async createTransacted(trx: Knex.Transaction<any, any[]>, data: Order) {
    const order = {
      ...data,
      status: 'on review',
    };

    return (
      await trx('orders').insert(order).returning('*')
    )[0] as any as Order;
  }

  update(orderId: string, data: Order) {
    const order = this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    return pgClient('orders')
      .where('id', orderId)
      .update({ ...order, ...data });
  }
}
