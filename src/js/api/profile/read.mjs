import { authFetch } from "../auth/posts/authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/profiles";

/**

Fetches a list of user profiles from the API server.
@async
@function
@throws {Error} If the HTTP response status is not okay.
@returns {Promise<Object[]>} An array of JSON objects representing user profiles.
*/

export async function getProfiles() {
  const response = await fetch(`${apiPath}/social/profiles`, {
    headers: headers(),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

/**

Fetches a user profile with the given name from the API server.
@async
@function
@param {string} name - The name of the user profile to retrieve.
@throws {Error} If the name is not provided or if the HTTP response status is not okay.
@returns {Promise<Object>} A JSON object representing the requested user profile.
*/

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}?_following=true&_followers=true`;

  const response = await authFetch(getProfileURL);

  return await response.json();
}
