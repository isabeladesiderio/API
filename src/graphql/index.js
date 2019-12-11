import { merge } from 'lodash';
import { makeExecutableSchema } from 'apollo-server-express';
import { typeDef as QueryTypeDef, resolvers as QueryResolvers } from './querys';
import {
  typeDef as MutationTypeDef,
  resolvers as MutationResolvers,
} from './mutations';
import { typeDef as UsersTypeDef, resolvers as UsersResolvers } from './users';
import { typeDef as JobsTypeDef, resolvers as JobsResolvers } from './jobs';
import { typeDef as ProccessTypeDef, resolvers as ProccessResolvers } from './proccess';


export const typeDefs = [QueryTypeDef, MutationTypeDef, UsersTypeDef, JobsTypeDef, ProccessTypeDef];


export const resolvers = merge(
  QueryResolvers,
  MutationResolvers,
  UsersResolvers,
  JobsResolvers,
  ProccessResolvers
);



export default makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  typeDefs,
  resolvers,
});