import type { Knex } from 'knex';
import { PGTable } from 'src/database/pg/table.enum';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(PGTable.carts, function (table) {
    table.uuid('id').primary();
    table.uuid('user_id');
    table.bigint('created_at').notNullable();
    table.bigint('updated_at').notNullable();
    table.enum('status', ['OPEN', 'ORDERED']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(PGTable.carts);
}
