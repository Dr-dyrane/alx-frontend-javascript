/**
 * Creates a resolved promise with an object containing firstName and lastName.
 *
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {Promise} A promise resolved with an object { firstName, lastName }.
 *
 * @example
 * const result = await signUpUser('John', 'Doe');
 * console.log(result); // { firstName: 'John', lastName: 'Doe' }
 */
function signUpUser (firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName
  });
}

export default signUpUser;
