import { authFetch } from "../auth/posts/authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/profiles";

export async function getProfiles() {
  const response = await fetch(`${apiPath}/social/profiles`, {
    headers: headers(),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}?_following=true&_followers=true`;

  const response = await authFetch(getProfileURL);

  return await response.json();
}
