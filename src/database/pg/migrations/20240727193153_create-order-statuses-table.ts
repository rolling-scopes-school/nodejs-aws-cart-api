import type { Knex } from 'knex';
import { PGTable } from '../table.enum';
import { OrderStatus } from 'src/order/type';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(PGTable.orderStatuses, function (table) {
    table.uuid('id').primary();
    table
      .uuid('order_id')
      .references('id')
      .inTable(PGTable.orders)
      .onDelete('CASCADE');
    table
      .enum('status', [
        OrderStatus.Open,
        OrderStatus.Approved,
        OrderStatus.Confirmed,
        OrderStatus.Sent,
        OrderStatus.Completed,
        OrderStatus.Cancelled,
      ])
      .defaultTo(OrderStatus.Open);
    table.bigint('timestamp');
    table.string('comment').defaultTo('');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(PGTable.orderStatuses);
}
