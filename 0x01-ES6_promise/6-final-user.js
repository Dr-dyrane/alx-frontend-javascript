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
  try {
    // Fetch user data and upload photo using async/await
    const userData = await signUpUser(firstName, lastName);
    const fileData = await uploadPhoto(fileName);

    // Return a consistent array structure for fulfilled promises
    return [
      { status: 'fulfilled', value: userData },
      { status: 'fulfilled', value: fileData }
    ];
  } catch (error) {
    // Return an array structure for rejected promises
    return [{ status: 'rejected', value: error.toString() }];
  }
}
