/**

The base URL for the API host.
@constant {string}
*/
export const API_HOST_URL = "https://nf-api.onrender.com";
/**

The base path for the API endpoints.
@constant {string}
*/
export const API_BASE = "/api/v1";
/**

The base path for the social API endpoints.
@constant {string}
*/
export const API_SOCIAL_BASE = "/social";
/**

The full URL for the social API endpoint.
@constant {string}
*/
export const API_SOCIAL_URL = `${API_HOST_URL}${API_BASE}${API_SOCIAL_BASE}`;
/**

A URL object representing the API base URL.
@constant {URL}
*/
export const apiUrl = new URL("https://nf-api.onrender.com/api/v1");
/**

The string representation of the API base URL.
@constant {string}
*/
export const apiPath = apiUrl.toString();
