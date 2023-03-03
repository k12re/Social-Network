import { apiPath } from "../constants.mjs";
import { headers } from "../headers.mjs";

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
