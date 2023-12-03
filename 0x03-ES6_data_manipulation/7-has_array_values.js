/**
 * Checks if all values from an array are present in a Set.
 *
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array containing values to check.
 * @returns {boolean} - Returns true if all values from the array are in the Set, else false.
 * @example
 * // Example usage:
 * const mySet = new Set([1, 2, 3, 4, 5]);
 * const arrayToCheck = [2, 4];
 * const result = hasValuesFromArray(mySet, arrayToCheck);
 * console.log(result); // Output: true
 */
export default function hasValuesFromArray(set, array) {
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
