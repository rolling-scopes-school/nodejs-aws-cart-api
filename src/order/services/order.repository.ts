import { Inject } from '@nestjs/common';
import { Knex } from 'knex';
import { PG_CONNECTION } from 'src/database/pg/database.module';
import { PGTable } from 'src/database/pg/table.enum';
import { Order } from '../models';
import { randomUUID } from 'crypto';
import { hydrateGetOrderResult } from './hydrate-get-order-result.util';
import { getHydrateAll } from './get-hydreated-all.util';

export class OrderRepository {
  constructor(@Inject(PG_CONNECTION) private readonly knex: Knex<any>) {}

  getAll() {
    return this.knex
      .select([
        `${PGTable.orders}.id`,
        `${PGTable.orders}.user_id as userId`,
        `${PGTable.orders}.cart_id as cartId`,
        `${PGTable.orders}.delivery`,
        `${PGTable.orders}.comment`,
        `${PGTable.orderItems}.product_id as productId`,
        `${PGTable.orderItems}.count`,
        `${PGTable.orderStatuses}.id as statusId`,
        `${PGTable.orderStatuses}.status`,
        `${PGTable.orderStatuses}.timestamp`,
        `${PGTable.orderStatuses}.comment`,
      ])
      .from(PGTable.orders)
      .innerJoin(
        PGTable.orderItems,
        `${PGTable.orders}.id`,
        `${PGTable.orderItems}.order_id`,
      )
      .innerJoin(
        PGTable.orderStatuses,
        `${PGTable.orders}.id`,
        `${PGTable.orderStatuses}.order_id`,
      )
      .then(getHydrateAll(hydrateGetOrderResult));
  }

  async getById(orderId: string) {
    return this.knex
      .select([
        `${PGTable.orders}.id`,
        `${PGTable.orders}.user_id as userId`,
        `${PGTable.orders}.cart_id as cartId`,
        `${PGTable.orders}.delivery`,
        `${PGTable.orders}.comment`,
        `${PGTable.orderItems}.product_id as productId`,
        `${PGTable.orderItems}.count`,
        `${PGTable.orderStatuses}.id as statusId`,
        `${PGTable.orderStatuses}.status`,
        `${PGTable.orderStatuses}.timestamp`,
        `${PGTable.orderStatuses}.comment`,
      ])
      .from(PGTable.orders)
      .innerJoin(
        PGTable.orderItems,
        `${PGTable.orders}.id`,
        `${PGTable.orderItems}.order_id`,
      )
      .innerJoin(
        PGTable.orderStatuses,
        `${PGTable.orders}.id`,
        `${PGTable.orderStatuses}.order_id`,
      )
      .where(`${PGTable.orders}.id`, orderId)
      .then(hydrateGetOrderResult);
  }

  async create(payload: Order) {
    await this.knex.transaction(async (trx) => {
      await trx(PGTable.orders).insert({
        id: payload.id,
        user_id: payload.userId,
        cart_id: payload.cartId,
        delivery: JSON.stringify({
          address: payload.address.address,
          firstName: payload.address.firstName,
          lastName: payload.address.lastName,
        }),
        comment: payload.address.comment,
      });

      await trx(PGTable.orderItems).insert(
        payload.items.map((item) => ({
          order_id: payload.id,
          product_id: item.productId,
          count: item.count,
        })),
      );

      await trx(PGTable.orderStatuses).insert({
        id: randomUUID(),
        order_id: payload.id,
        status: payload.statusHistory[0].status,
        timestamp: payload.statusHistory[0].timestamp,
      });
    });
  }
}
