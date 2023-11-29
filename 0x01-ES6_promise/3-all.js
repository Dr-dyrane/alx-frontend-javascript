/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

/**
 * Handles the profile signup process by uploading a photo and creating a user.
 * Logs the concatenated information if successful, or logs an error message if the signup system is offline.
 * 
 * @returns {Promise} A Promise representing the completion of the profile signup process.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => { 
      console.log(
        `${result[0].body} ${result[1].firstName} ${result[1].lastName}`,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
