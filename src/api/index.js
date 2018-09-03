const baseUrl = 'https://jsonplaceholder.typicode.com';

async function fetchUser(id = 1) {
  const response = await fetch(`${baseUrl}/users?id=${id}`);
  const responseToJson = await response.json();
  return responseToJson[0];
}

async function fetchPosts() {
  return fetch(`${baseUrl}/posts`).then(resp => resp.json());
}

export default {
  fetchUser,
  fetchPosts,
};
