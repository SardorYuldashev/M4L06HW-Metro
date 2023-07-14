/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('path_links').del()
  await knex('path_links').insert([
    {path_id: 1, linked_id: 3},
    {path_id: 3, linked_id: 1},
    {path_id: 1, linked_id: 2},
    {path_id: 2, linked_id: 1},
    {path_id: 2, linked_id: 3},
    {path_id: 3, linked_id: 2},
    {path_id: 2, linked_id: 5},
    {path_id: 5, linked_id: 2},
  ]);
};