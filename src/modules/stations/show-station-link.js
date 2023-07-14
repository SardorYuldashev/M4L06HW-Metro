import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showStationLink = async (args) => {
  const link = await db('station_links').where(args).first();

  if (!link) {
    throw new NotFoundError('Bekat topilmadi');
  };

  return link;
};