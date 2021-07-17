const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
} = require('graphql');
const PostType = require('./post');
const CommentType = require('./comment');

// Root query
const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    post: {
      type: PostType,
      description: 'Single post',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        return axios
          .get(`https://jsonplaceholder.typicode.com/posts/${args.id}`)
          .then((res) => res.data);
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      description: 'List of all posts',
      resolve: (parent, args) => {
        return axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.data);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      description: 'List of all comments',
      resolve: (parent, args) => {
        return axios
          .get(`https://jsonplaceholder.typicode.com/comments`)
          .then((res) => res.data);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
