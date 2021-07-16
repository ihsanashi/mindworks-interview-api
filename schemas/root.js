const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLSchema,
} = require('graphql');
const PostType = require('./post');
const CommentType = require('./comment');

// Root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return axios
          .get(`https://jsonplaceholder.typicode.com/posts/${args.id}`)
          .then((res) => res.data);
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.data);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return axios
          .get('https://jsonplaceholder.typicode.com/comments')
          .then((res) => res.data);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
