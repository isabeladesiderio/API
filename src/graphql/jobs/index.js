import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Jobs {
    id: ID!
    title: String!
    description: String
    request: String 
    }`;

export const resolvers = {
    Jobs: {
    id: ({ _id }) => _id,
  
  },
};