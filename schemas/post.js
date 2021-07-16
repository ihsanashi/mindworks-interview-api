const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    userId: { type: GraphQLID },
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

module.exports = PostType;
