import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Users {
    id: ID!
    name: String!
    email: String
    cpf: Int
    password: String 
   }`;

export const resolvers = {
    Users: {
    id: ({ _id }) => _id,
  },
};