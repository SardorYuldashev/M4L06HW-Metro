import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editMetro = async ({ id, ...changes }) => {
  const metro = await db('metros').where({ id }).first();

  if (!metro) {
    throw new NotFoundError('Metro topilmadi');
  };

  return (await db('metros').where({ id }).update(changes).returning('*'))[0];
};