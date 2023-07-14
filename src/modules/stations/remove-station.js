import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeStation = async ({ id }) => {
  const station = await db('stations').where({ id }).first();

  if (!station) {
    throw new NotFoundError('Bekat topilmadi');
  };

  if (station.backward_id && station.forward_id) {
    await db('stations').update({ forward_id: station.forward_id }).where({ id: station.backward_id });
    await db('stations').update({ backward_id: station.backward_id }).where({ id: station.forward_id });
  };

  if (station.backward_id && !station.forward_id) {
    await db('stations').update({ forward_id: null }).where({ id: station.backward_id });
  };

  if (station.forward_id && !station.backward_id) {
    await db('stations').update({ backward_id: null }).where({ id: station.forward_id });
  };

  return (await db('stations').where({ id }).delete().returning('*'))[0];
};