import { apiPath } from "../constants.mjs";
import { headers } from "../headers.mjs";

/**

Deletes the user profile with the given name from the API server.
@async
@function
@param {string} name - The name of the user profile to be deleted.
@throws {Error} If the HTTP response status is not OK.
@returns {Promise<Object>} - The JSON response of the HTTP request.
*/

export async function deleteProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}`, {
    method: "delete",
    headers: headers(),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
