import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import helmet from 'helmet';
import schema from './graphql';
import { connectMongo, loadModels } from './database/mongoose';

const playground = {
  settings: {
    'editor.cursorShape': 'line',
  },
};
class Server {
  constructor() {
    this.express = express();
    this.express.use(helmet());
    this.database();
    this.createServerApollo();
  }

  database() {
    connectMongo();
    // loadModels();
  }

  async createServerApollo() {
    const apolloServer = new ApolloServer({
      context: async ({ req }) => {
        return {};
      },
      schema,
      playground: true,
      uploads: false,
      introspection: true,
    });

    apolloServer.applyMiddleware({ app: this.express, path: '/' });
  }
}

export default new Server();
