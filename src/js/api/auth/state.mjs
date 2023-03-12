import { load } from "../storage/index.mjs";

/**

Check if user is logged in
@returns {boolean} true if user is logged in, false otherwise
*/
export const isLoggedIn = () => Boolean(load("token"));
/**

Get the user's profile data
@returns {object|null} user's profile data if available, null otherwise
*/
export const profile = () => load("profile");
