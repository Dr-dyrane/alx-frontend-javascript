/**
 * Returns a Promise that represents the response from an API based on the success parameter.
 * The promise is resolved with a successful response or rejected with an error message.
 *
 * @param {boolean} success - A flag indicating whether the API call is successful.
 * @returns {Promise} A Promise that resolves with the API response or rejects with an error message.
 */
export default function getFullResponseFromAPI (success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
