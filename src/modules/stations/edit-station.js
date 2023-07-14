import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editStation = async ({ id, ...changes }) => {
  const station = await db('stations').where({ id }).first();

  if (!station) {
    throw new NotFoundError(`Bekat topilmadi`);
  };

  return (await db('stations').where({ id }).update(changes).returning('*'))[0];
};