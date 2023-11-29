/**
 * Concatenates two arrays and a string into a single array.
 *
 * @param {Array} array1 - The first array to be concatenated.
 * @param {Array} array2 - The second array to be concatenated.
 * @param {string} string - The string to be included in the resulting array.
 * @returns {Array} The concatenated array.
 */
export default function concatArrays (array1, array2, string) {
  /**
     * Using the spread operator (...) to concatenate array1, array2, and string into a single array.
     *
     * @type {Array}
     */
  return [...array1, ...array2, ...string];
}
