import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('posts', (table) => {
    table.string('content', 10000).notNullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('posts', (table) => {
    table.string('content').notNullable().alter();
  });
}
