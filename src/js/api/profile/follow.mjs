import { apiPath } from "../constants.mjs";
import { headers } from "../headers.mjs";
/**
Follows the user profile with the given name on the API server.
@async
@function
@param {string} name - The name of the user profile to follow.
@throws {Error} If the HTTP response status is not okay.
@returns {Promise<Object>} The JSON response of the HTTP request.
*/

export async function followProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}/follow`, {
    headers: headers(),
    method: "PUT",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
