import * as constants from "../constants.mjs";
import { registerFormListener } from "../handlers/register.mjs";

const action = "/auth/register";
const method = "POST";

/**

Sends a POST request to the server to register a new user with the provided profile.

@async

@function registerUser

@param {Object} profile - The user profile to be registered.

@throws {Error} - If an error occurs while sending the request or parsing the response.

@returns {Promise<Object>} - A promise that resolves to an object representing the registered user.
*/

export async function registerUser(profile) {
  try {
    const registerURL = constants.API_SOCIAL_URL + action;

    const postData = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    };

    const response = await fetch(registerURL, postData);
    const result = await response.json();
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to register user: ${error.message}`);
  }
}
