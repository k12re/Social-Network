import * as constants from "../constants.mjs";
import { registerFormListener } from "../handlers/register.mjs";

const action = "/auth/register";
const method = "POST";

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
  }
}
