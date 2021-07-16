const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    postId: { type: GraphQLID },
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

module.exports = CommentType;
