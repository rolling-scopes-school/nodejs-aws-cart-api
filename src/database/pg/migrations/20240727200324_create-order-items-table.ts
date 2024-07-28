import type { Knex } from 'knex';
import { PGTable } from '../table.enum';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(PGTable.orderItems, function (table) {
    table.increments('id').primary();
    table
      .uuid('order_id')
      .references('id')
      .inTable(PGTable.orders)
      .notNullable()
      .onDelete('CASCADE');
    table.uuid('product_id');
    table.integer('count');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(PGTable.orderItems);
}
