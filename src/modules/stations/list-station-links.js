import db from '../../db/index.js';

export const listStationLinks = (filter = {}) => {
  return db('station_links').where(filter).select('*');
};