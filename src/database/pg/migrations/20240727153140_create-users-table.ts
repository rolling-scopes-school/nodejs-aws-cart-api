import type { Knex } from 'knex';
import { PGTable } from '../table.enum';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(PGTable.users, function (table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('email').defaultTo('');
    table.string('password').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(PGTable.users);
}
