/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function (knex) {
  await knex('paths').del()
  await knex('paths').insert([
    {
      // id: 1,
      name: "Chilonzor",
      metro_id: 1
    },
    {
      // id: 2,
      name: "O'zbekiston",
      metro_id: 1
    },
    {
      // id: 3,
      name: "Yunusobod",
      metro_id: 1
    },
    {
      // id: 4,
      name: "Sergeli",
      metro_id: 1
    },
    {
      // id: 5,
      name: "Yerusti yo'li",
      metro_id: 1
    }
  ]);
};