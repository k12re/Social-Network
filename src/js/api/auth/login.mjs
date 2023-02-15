import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/auth/login';
const method = 'post';

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      'Content-type': 'application/json',
    },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);
}
