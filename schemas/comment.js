const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    postId: { type: GraphQLInt },
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

module.exports = CommentType;
