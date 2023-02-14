import * as constants from '../constants.mjs';
import { registerFormListener } from '../handlers/registerFormListener.mjs';

registerFormListener();

const action = '/auth/register';
const method = 'POST';

export async function registerUser(profile) {
  try {
    console.log(action);
    const registerURL = constants.API_SOCIAL_URL + action;
    console.log(registerURL);

    const postData = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    };

    const response = await fetch(registerURL, postData);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
