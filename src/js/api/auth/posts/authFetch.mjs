import { load } from "../../storage/index.mjs";

/**
 * Generates an object with the default headers for authenticated requests.
 *
 * @function
 * @returns {Object} - An object containing the default headers for authenticated requests.
 */
export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Makes an authenticated fetch request using the given URL and options.
 *
 * @function
 * @async
 * @param {string} url - The URL to fetch from.
 * @param {object} [options={}] - Additional options to include in the fetch request.
 * @returns {Promise<Response>} - A promise that resolves to the Response object.
 */
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
