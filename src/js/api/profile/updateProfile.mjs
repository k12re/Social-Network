import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";

const action = "/profiles";
const method = "put";

/**

Updates the user profile data on the API server.
@async
@function
@param {Object} profileData - An object containing the updated profile data.
@param {string} profileData.name - The name of the user profile to update.
@throws {Error} If the profile data does not contain a name.
@returns {Promise<Object>} The JSON response of the HTTP request.
*/

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}
