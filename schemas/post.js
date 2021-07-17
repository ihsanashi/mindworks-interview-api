const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    userId: { type: GraphQLInt },
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

module.exports = PostType;
