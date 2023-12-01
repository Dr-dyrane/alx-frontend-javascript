/**
 * Handles the response from a Promise.
 * Resolves with a successful response or rejects with an error.
 * Logs a message indicating that a response was received from the API.
 *
 * @param {Promise} promise - The Promise to handle the response from.
 * @returns {Promise} A Promise that resolves with a successful response or rejects with an error.
 */
export default function handleResponseFromAPI(promise) {
  /* eslint-disable */
    return promise
      .then(() => ({ status: 200, body: 'success' })) // Resolves with a successful response
      .catch(() => new Error()) // Rejects with an error
      .finally(() => console.log('Got a response from the API')); // Logs a message
  }
  