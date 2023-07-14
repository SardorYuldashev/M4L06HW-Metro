import db from '../../db/index.js';
import { BadRequestError } from '../../shared/errors/index.js';

export const addPathLink = async (payload) => {
  if (payload.path_id === payload.linked_id) {
    throw new BadRequestError(`Ikkita bir xil ID berilgan`);
  };

  await db('path_links').insert({ path_id: payload.linked_id, linked_id: payload.path_id });
  const result = await db('path_links').insert(payload).returning('*');

  return result[0];
};