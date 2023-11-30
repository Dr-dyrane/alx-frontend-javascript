import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the signup process with user data and photo upload.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise<Array>} An array containing objects with status and value.
 */
export default async function handleProfileSignup (firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => (
      response.map((user) => ({
        status: user.status,
        value: user.status === 'fulfilled' ? user.value : String(user.reason)
      }))
    ));
 }
 