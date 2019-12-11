import { gql } from 'apollo-server-express';
import {resolvers as JobsResolvers} from './jobs';
import {resolvers as UsersResolvers}  from './users';
import {resolvers as ProccessResolvers} from './proccess';


export const typeDef = gql`
  type Query {
    #USERS
    "Teste"
    users: [Users]
    #JOBS
    "Teste"
    jobs: [Jobs]
    #PROCCESS
    "Teste"
    proccess: [Proccess]
  }
  `

export const resolvers = {
  Query:{
    ...UsersResolvers,
    ...JobsResolvers,
    ...ProccessResolvers,
  }
};