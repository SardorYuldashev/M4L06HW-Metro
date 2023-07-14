import db from '../../db/index.js';
import { BadRequestError } from '../../shared/errors/index.js';

export const addStation = async (payload) => {
  const existing = await db('stations').where({ path_id: payload.path_id, name: payload.name }).first();

  if (existing) {
    throw new BadRequestError('Bunday bekat mavjud');
  };

  const { last_value } = (await db('stations_id_seq').select('*'))[0];
  const number = (Number(last_value) + 1);

  if (payload.backward_id) {
    const backward = await db('stations').where({ id: payload.backward_id }).first();

    if (backward.forward_id) {
      throw new BadRequestError(`${backward.name} bekatidan keyingi bekati mavjud`);
    };

    await db('stations').update({ forward_id: number }).where({ id: backward.id });
  }

  if (payload.forward_id) {
    const forward = await db('stations').where({ id: payload.forward_id }).first();

    if (forward.backward_id) {
      throw new BadRequestError(`${forward.name} bekatidan oldingi bekati mavjud`);
    };

    await db('stations').update({ backward_id: number }).where({ id: forward.id });
  };

  const result = await db('stations').insert(payload).returning('*');

  return result[0];
};