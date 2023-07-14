import { makeExecutableSchema } from '@graphql-tools/schema';
import metrosModule from '../modules/metros/_index.js';
import pasthsModule from '../modules/paths/_index.js';
import stationsModule from '../modules/stations/_index.js';

const typdefsArr = [
  metrosModule.typeDefs,
  pasthsModule.typeDefs,
  stationsModule.typeDefs
];

const resolversArr = [
  metrosModule.resolvers,
  pasthsModule.resolvers,
  stationsModule.resolvers
];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});