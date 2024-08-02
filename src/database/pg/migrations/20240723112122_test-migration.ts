import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  const isExists = await knex.schema.hasTable('test');
  if (!isExists) {
    return knex.schema.createTable('test', function (table) {
      table.increments('id');
      table.string('message');
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('test');
}
