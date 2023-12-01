/**
 * Uploads a photo with the given filename.
 * @param {string} filename - The name of the file to upload.
 * @returns {Promise} A promise that rejects with an error indicating the processing failure.
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
