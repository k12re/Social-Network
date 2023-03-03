import { apiPath } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function unfollowProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}/unfollow`, {
    headers: headers(),
    method: "PUT",
  });
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
