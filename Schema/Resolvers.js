const axios = require('axios');

const baseUrl = 'https://jsonplaceholder.typicode.com';

const resolvers = {
  Query: {
    post: (parent, args) => {
      const { id } = args;
      return axios.get(`${baseUrl}/posts/${id}`).then((res) => res.data);
    },
    posts: async (parent, args) => {
      const { sortBy, limit } = args;

      if (sortBy && limit) {
        const { order } = sortBy;

        const result = await axios
          .get(`${baseUrl}/posts`)
          .then((res) => res.data);

        const sorted = order === 'ASC' ? [...result] : [...result].reverse();

        return sorted.slice(0, limit);
      }

      if (sortBy) {
        const { order } = sortBy;

        const result = await axios
          .get(`${baseUrl}/posts`)
          .then((res) => res.data);

        const sorted = order === 'ASC' ? [...result] : [...result].reverse();

        return sorted;
      }

      if (limit) {
        const result = await axios
          .get(`${baseUrl}/posts`)
          .then((res) => res.data);
        return result.slice(0, limit);
      }

      return axios.get(`${baseUrl}/posts`).then((res) => res.data);
    },
    comments: async (parent, args) => {
      const { sortBy, limit } = args;

      if (sortBy && limit) {
        const { order } = sortBy;

        const result = await axios
          .get(`${baseUrl}/comments`)
          .then((res) => res.data);

        const sorted = order === 'ASC' ? [...result] : [...result].reverse();

        return sorted.slice(0, limit);
      }

      if (sortBy) {
        const { order } = sortBy;

        const result = await axios
          .get(`${baseUrl}/comments`)
          .then((res) => res.data);

        const sorted = order === 'ASC' ? [...result] : [...result].reverse();

        return sorted;
      }

      if (limit) {
        const result = await axios
          .get(`${baseUrl}/comments`)
          .then((res) => res.data);
        return result.slice(0, limit);
      }

      return axios.get(`${baseUrl}/comments`).then((res) => res.data);
    },
  },
};

module.exports = { resolvers };
