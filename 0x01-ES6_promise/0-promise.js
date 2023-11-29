/**
 * Returns a Promise that represents the response from an API.
 * The promise is resolved with a successful response or rejected with an error message.
 *
 * @returns {Promise} A Promise that resolves with the API response or rejects with an error message.
 */
export default function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    // Simulating a successful API call
    resolve({ status: 200, body: 'Success' });
  });
}
