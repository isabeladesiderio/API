import { gql } from 'apollo-server-express';
import Users from '../../models/Users';


export const typeDef = `
  
  input AddUserInput {
    name: String!
  }
  
  input UpdateUserInput{
    name: String!
    email: String
    cpf: Int
    password: String
  }
  type UserPayload {
    users: Users
  }
  type RemoveUserPayload {
    users: Users
    removed: Boolean
  }
`;

export const resolvers = {
  addUser: async (parent, { input }) => {
    const users = new Users(input);
    await users.save();
    return { users };
  },
  updateUser: async (parent, { id, input }) => {
    const users = await Users.findByIdAndUpdate(id, input, { new: true })
    return { users };
  },
  removeUser: async (parent, { id }) => {
    const users = await Users.findById(id);
    await Users.delete({ _id: id });
    return { users, removed: true };
  },
  restoreUser: async (parent, { id }) => {
    const users = Users.findById(id)
    await Users.restore({ _id: id });
    return { users };
  },
};