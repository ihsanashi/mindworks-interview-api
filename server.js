const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs } = require('./Schema/TypeDefs');
const { resolvers } = require('./Schema/Resolvers');

const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(`Server listening on port ${PORT}`);
  return { server, app };
}

startApolloServer();
