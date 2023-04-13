import * as storage from "./storage/index.mjs";

/**

 * Generate headers for an HTTP request with an optional content type and authorization token.
 * @param {string} contentType - The content type of the request body, if any.
 * @returns {Object} The headers object for the HTTP request.
 */
export const headers = (contentType) => {
  // Load the user's access token from storage
  const token = storage.load("token");

  // Initialize an empty headers object
  const headers = {};

  // If a content type was provided, add it to the headers object
  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  // If a token is available, add an authorization header to the headers object
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // Return the headers object for the HTTP request
  return headers;
};
