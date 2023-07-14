import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeStation = async ({ id }) => {
  const station = await db('stations').where({ id }).first();

  if (!station) {
    throw new NotFoundError('Bekat topilmadi');
  };

  return (await db('stations').where({ id }).delete().returning('*'))[0];
};