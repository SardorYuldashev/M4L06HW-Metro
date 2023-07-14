import { makeExecutableSchema } from '@graphql-tools/schema';
import metrosModule from '../modules/metros/_index.js';
import pasthsModule from '../modules/paths/_index.js';

const typdefsArr = [
  metrosModule.typeDefs,
  pasthsModule.typeDefs
];

const resolversArr = [
  metrosModule.resolvers,
  pasthsModule.resolvers
];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});