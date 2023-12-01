/**
 * Returns the number of arguments passed to the function.
 *
 * @param {...any} args - Any number of arguments.
 * @returns {number} The count of arguments passed.
 */
export default function returnHowManyArguments(...args) {
  /**
     * Using the rest parameter (...args) to capture any number of arguments passed to the function.
     *
     * @type {Array}
     */

  // Returning the length of the arguments array, indicating the number of arguments passed.
  return args.length;
}
