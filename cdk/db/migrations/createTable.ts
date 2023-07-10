import { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('carts', (table) => {
    table.string('id').primary();
    table.string('user_id').notNullable();
    table.date('created_at').notNullable();
    table.date('updated_at').notNullable();
    table.enum('status', ["OPEN", "ORDERED"]);
  });

  await knex.schema.createTable('cart_items', (table) => {
    table.string('cart_id').references('id').inTable('carts').onDelete('CASCADE');
    table.string('product_id');
    table.integer('count');
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('cart_items');
  await knex.schema.dropTable('carts');
}
