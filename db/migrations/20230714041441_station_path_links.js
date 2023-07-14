/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('station_path_links', (table) => {
    table.increments('id');
    table.integer('station_id').references('id').inTable('stations').onDelete('CASCADE');
    table.integer('linked_id').references('backward_id').inTable('stations').onDelete('SET NULL');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('station_path_links');
};