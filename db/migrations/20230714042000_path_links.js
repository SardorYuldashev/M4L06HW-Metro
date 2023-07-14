/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('path_links', (table) => {
    table.increments('id');
    table.integer('path_id').references('id').inTable('paths').onDelete('CASCADE');
    table.integer('linked_id').references('metro_id').inTable('paths').onDelete('SET NULL');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('path_links');
};