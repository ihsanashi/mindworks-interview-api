const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String!
  }

  type Comment {
    postId: ID!
    id: ID!
    name: String!
    email: String!
    body: String!
  }

  enum PostSortField {
    id
    # title
  }

  enum CommentSortField {
    id
    # name
  }

  enum Order {
    ASC
    DESC
  }

  input CommentSort {
    field: CommentSortField!
    order: Order!
  }

  input PostSort {
    field: PostSortField!
    order: Order!
  }

  # Queries
  type Query {
    post(id: Int!): Post!
    posts(sortBy: PostSort, limit: Int): [Post!]!
    comments(sortBy: CommentSort, limit: Int): [Comment!]!
  }
`;

module.exports = { typeDefs };
