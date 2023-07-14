import { makeExecutableSchema } from '@graphql-tools/schema';
import metrosModule from '../modules/users/_index.js';

const typdefsArr = [
];

const resolversArr = [
];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});