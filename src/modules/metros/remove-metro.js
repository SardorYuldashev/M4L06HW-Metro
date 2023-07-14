import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeMetro = async ({ id }) => {
  const metro = await db('metros').where({ id }).first();

  if (!metro) {
    throw new NotFoundError('Metro topilmadi');
  };

  return (await db('metros').where({ id }).delete().returning('*'))[0];
};