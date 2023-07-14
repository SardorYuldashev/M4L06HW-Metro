import db from '../../db/index.js';

export const removePath = async ({ id }) => {
  const path = await db('paths').where({ id }).first();

  if (!path) {
    throw new NotFoundError("Metro yo'li topilmadi");
  };

  return (await db('paths').where({ id }).delete().returning('*'))[0];
};