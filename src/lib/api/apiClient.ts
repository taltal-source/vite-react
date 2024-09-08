import axios from 'axios';

const client = axios.create({
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    return Promise.reject({
      response: error.response,
    });
  },
);

export default client;
