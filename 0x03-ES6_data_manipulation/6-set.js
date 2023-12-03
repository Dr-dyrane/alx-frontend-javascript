/**
 * Creates a Set from an array.
 *
 * @param {Array} array - The array to convert into a Set.
 * @returns {Set} - A Set containing the unique elements from the array.
 * @example
 * // Example usage:
 * const array = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueSet = setFromArray(array);
 * console.log([...uniqueSet]); // Output: [1, 2, 3, 4, 5]
 */
export default function setFromArray(array) {
  return new Set(array);
}
