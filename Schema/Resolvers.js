const axios = require('axios');

const resolvers = {
  Query: {
    posts() {
      return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.data);
    },
    post(parent, args) {
      const { id } = args;
      return axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.data);
    },
    comments() {
      return axios
        .get(`https://jsonplaceholder.typicode.com/comments`)
        .then((res) => res.data);
    },
  },
};

module.exports = { resolvers };
