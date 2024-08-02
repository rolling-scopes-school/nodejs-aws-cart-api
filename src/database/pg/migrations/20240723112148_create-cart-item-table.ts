import type { Knex } from 'knex';
import { PGTable } from 'src/database/pg/table.enum';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(PGTable.cartItems, function (table) {
    table.increments('id').primary();
    table
      .uuid('cart_id')
      .references('id')
      .inTable(PGTable.carts)
      .notNullable()
      .onDelete('CASCADE');
    table.uuid('product_id');
    table.integer('count');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(PGTable.cartItems);
}
