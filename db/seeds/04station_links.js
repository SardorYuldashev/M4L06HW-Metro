/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('station_links').del()
  await knex('station_links').insert([
    {station_id: 4, linked_id: 19},
    {station_id: 19, linked_id: 4},
    {station_id: 6, linked_id: 25},
    {station_id: 25, linked_id: 6},
    {station_id: 28, linked_id: 20},
    {station_id: 20, linked_id: 28},
    {station_id: 31, linked_id: 32},
    {station_id: 32, linked_id: 31},
  ]);
};