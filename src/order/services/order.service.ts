import { Injectable } from '@nestjs/common';
import { Order } from '../models';
import { Knex } from 'knex';
import pg from '../../index';

@Injectable()
export class OrderService {

  async findById(orderId: string): Promise<Order> {
    return await pg('orders').where('id', orderId).first();
  }

  async create(trx: Knex.Transaction<any, any[]>, data: Order) {
    console.log('Creating transaction', data)
    const order = {
      ...data,
      status: 'OPEN',
    };
    return (await trx('orders').insert(order).returning('*'))[0] as any as Order
  }

  async update(orderId: string, data: Order) {
    const order = await this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    return pg('orders')
    .where('id', orderId)
    .update({...order, ...data});
  }
}
