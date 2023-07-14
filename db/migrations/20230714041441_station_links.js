/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('station_links', (table) => {
    table.increments('id');
    table.integer('station_id').references('id').inTable('stations').onDelete('CASCADE');
    table.integer('linked_id').references('id').inTable('stations').onDelete('CASCADE');
    table.unique(['station_id', 'linked_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('station_links');
};