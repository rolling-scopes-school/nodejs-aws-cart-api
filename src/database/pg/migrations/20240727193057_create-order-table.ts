import type { Knex } from 'knex';
import { PGTable } from '../table.enum';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(PGTable.orders, function (table) {
    table.uuid('id').primary();
    table
      .uuid('user_id')
      .references('id')
      .inTable(PGTable.users)
      .onDelete('CASCADE');
    table.uuid('cart_id').notNullable();
    table.json('delivery').notNullable();
    table.string('comment').defaultTo('');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(PGTable.orders);
}
