/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function (knex) {
  await knex('metros').del()
  await knex('metros').insert([
    {
      // id: 1,
      name: 'Toshkent metropoliteni'
    }
  ]);
};