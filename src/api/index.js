import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const waait = (millis = 1000) =>
  new Promise(resolve => setTimeout(resolve, millis));

async function fetchUser(id) {
  await waait();
  return axios.get(`${baseUrl}/users/${id}`);
}

async function fetchPosts() {
  await waait();
  return axios.get(`${baseUrl}/posts`);
}

export default {
  fetchUser,
  fetchPosts,
};
