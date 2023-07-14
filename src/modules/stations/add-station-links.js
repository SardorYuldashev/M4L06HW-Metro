import db from '../../db/index.js';
import { BadRequestError } from '../../shared/errors/index.js';

export const addStationsLink = async (payload) => {
  console.log(payload);

  if (payload.station_id === payload.linked_id) {
    throw new BadRequestError(`Ikkita bir xil ID berilgan`);
  };

  const first = await db('stations').where({ id: payload.station_id }).first();
  const second = await db('stations').where({ id: payload.linked_id }).first();

  if (first.path_id === second.path_id) {
    throw new BadRequestError(`Bitta yo'lni ikkita bekati kesishmaydi`);
  };

  await db('station_links').insert({ station_id: payload.linked_id, linked_id: payload.station_id })
  const result = await db('station_links').insert(payload).returning('*');

  await db('stations').update({ has_path_link: true }).where({ id: payload.station_id });
  await db('stations').update({ has_path_link: true }).where({ id: payload.linked_id });

  return result[0];
};