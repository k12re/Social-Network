import * as storage from "./storage/index.mjs";

/**

Returns an object with headers for API requests.
@param {string} contentType - The content type of the request (optional).
@returns {object} - An object with headers to be used in API requests.
*/

export const headers = (contentType) => {
  const token = storage.load("token");
  const headers = {};

  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};
