/**
 * Appends a specified string to each value in an array.
 *
 * @param {Array} array - The array whose values are to be modified.
 * @param {string} appendString - The string to append to each array value.
 * @returns {Array} The modified array.
 */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  // Iterating through each value in the array
  for (const value of array) {
    // Modifying the value by appending the specified string
    newArray.push(appendString + value);
  }

  // Returning the modified array
  return newArray;
}
