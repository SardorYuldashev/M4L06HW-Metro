import db from '../../db/index.js';

export const editPath = async ({ id, ...changes }) => {
  const path = await db('paths').where({ id }).first();

  if (!path) {
    throw new NotFoundError("Metro yo'li topilmadi");
  };

  return (await db('paths').where({ id }).update(changes).returning('*'))[0];
};