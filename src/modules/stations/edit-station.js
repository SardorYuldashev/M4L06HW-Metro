import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editStation = async ({ id, ...payload }) => {
  const station = await db('stations').where({ id }).first();

  if (!station) {
    throw new NotFoundError(`Bekat topilmadi`);
  };

  return (await db('stations').where({ id }).update(payload).returning('*'))[0];
};