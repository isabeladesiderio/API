import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Proccess {
    id: ID!
    name: String!
    maturity: String
    jobs : [Jobs]!
    }`;

export const resolvers = {
    Proccess: {
    id: ({ _id }) => _id,
    },
};