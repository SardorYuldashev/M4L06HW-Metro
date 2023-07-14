/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('paths', (table) => {
    table.increments('id');
    table.string('name', 150).unique().notNullable();
    table.integer('metro_id').references('id').inTable('metros').onDelete('CASCADE').unique();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('paths');
};