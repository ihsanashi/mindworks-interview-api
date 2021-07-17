const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    userId: Int!
    id: Int!
    title: String!
    body: String!
  }

  type Comment {
    postId: Int!
    id: Int!
    name: String!
    email: String!
    body: String!
  }

  # Queries
  type Query {
    post(id: Int!): Post!
    posts: [Post!]!
    comments(name: String, email: String, body: String): [Comment!]!
  }
`;

module.exports = { typeDefs };
