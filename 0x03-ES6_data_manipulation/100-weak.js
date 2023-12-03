/**
 * A WeakMap used to track the number of calls to different API endpoints.
 * @type {WeakMap}
 */
export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and tracks the number of calls using a WeakMap.
 *
 * @param {string} endpoint - The API endpoint to query.
 * @returns {number} - The number of times the API endpoint has been called.
 * @throws Will throw an error if the endpoint is called more than or equal to 5 times.
 * @example
 * // Example usage:
 * const endpoint = '/api/data';
 * try {
 *   const callCount = queryAPI(endpoint);
 *   console.log(`API endpoint ${endpoint} called ${callCount} times.`);
 * } catch (error) {
 *   console.error(error.message); // Output: 'Endpoint load is high'
 * }
 */
export function queryAPI(endpoint) {
  // Retrieve the current call count for the endpoint from the WeakMap
  let called = weakMap.get(endpoint) || 0;

  // Increment the call count
  called += 1;

  // Update the WeakMap with the new call count
  weakMap.set(endpoint, called);

  // Check if the endpoint has been called more than or equal to 5 times
  if (called >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Return the updated call count
  return called;
}
