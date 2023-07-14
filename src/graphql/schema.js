import { makeExecutableSchema } from '@graphql-tools/schema';
import metrosModule from '../modules/metros/_index.js';

const typdefsArr = [
  metrosModule.typeDefs
];

const resolversArr = [
  metrosModule.resolvers
];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});