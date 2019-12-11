import { gql } from 'apollo-server-express';
import {resolvers as JobsResolvers, typeDef as JobsTypeDef} from './jobs';
import {resolvers as UsersResolvers, typeDef as UsersTypeDef}  from './users';
import {resolvers as ProccessResolvers, typeDef as ProccessTypeDef}  from './proccess';


export const typeDef = gql`
  type Mutation {
    # JOBS
    addJobs(input: AddJobsInput!): JobsPayload
    updateJobs(id: ID! input: UpdateJobsInput!): JobsPayload
    removeJobs(id: ID!): RemoveJobsPayload
    restoreJobs (id: ID!): JobsPayload
    # USERS
    addUser(input: AddUserInput!): UserPayload
    updateUser(id: ID! input: UpdateUserInput!): UserPayload
    removeUser(id: ID!): RemoveUserPayload
    restoreUser(id: ID!): UserPayload
    #PROCCESS
    addProccess(input: AddProccessInput!): ProccessPayload
    updateProccess(id: ID! input: UpdateProccessInput!): ProccessPayload
    removeProccess(id: ID!): RemoveProccessPayload
    restoreProccess(id: ID!): ProccessPayload
  }
  ${JobsTypeDef}
  ${UsersTypeDef}
  ${ProccessTypeDef}
`

export const resolvers = {
  Mutation:{
    ...UsersResolvers,
    ...JobsResolvers,
    ...ProccessResolvers,
  }
  
}