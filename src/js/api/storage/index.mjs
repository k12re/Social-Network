/**

Saves the given key-value pair to the browser's local storage.
@function
@param {string} key - The key to use for storing the value.
@param {Object} value - The value to be stored. Will be converted to a JSON string.
@returns {undefined}
*/

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**

Loads the value corresponding to the given key from the browser's local storage.
@function
@param {string} key - The key of the value to be loaded.
@returns {Object | null} The loaded value, or null if there was an error parsing the JSON string or the key was not found.
*/

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**

Removes the given key-value pair from the browser's local storage.
@function
@param {string} key - The key of the value to be removed.
@returns {undefined}
*/
export function remove(key) {
  localStorage.remove(key);
}
