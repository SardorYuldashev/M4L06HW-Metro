/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('stations', (table) => {
    table.increments('id');
    table.string('name', 150).notNullable();
    table.integer('path_id').references('id').inTable('paths').onDelete('CASCADE');
    table.integer('forward_id').references('id').inTable('stations').onDelete('CASCADE');
    table.integer('backward_id').references('id').inTable('stations').onDelete('SET NULL');
    table.boolean('has_path_link').defaultTo('false');
    table.unique(['name', 'path_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('stations');
};