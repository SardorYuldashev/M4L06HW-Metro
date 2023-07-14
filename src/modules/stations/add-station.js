import db from '../../db/index.js';

export const addStation = async (payload) => {
  const hasLink = {};  

  const { last_value } = (await db('stations_id_seq').select('*'))[0];

  hasLink.forward_id = last_value;

  if (payload.backward_id) {
    hasLink.has_path_link = true;
  };

  const result = await db('stations').insert({ ...payload, ...hasLink }).returning('*');

  return result[0];
};