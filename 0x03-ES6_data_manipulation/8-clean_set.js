/**
 * Creates a cleaned string by removing a specified starting string from elements in a Set.
 *
 * @param {Set} set - The Set of strings to process.
 * @param {string} startString - The string to remove from the beginning of each element in the Set.
 * @returns {string} - A cleaned string containing modified elements from the Set.
 * @example
 * // Example usage:
 * const mySet = new Set(['apple', 'banana', 'cherry']);
 * const cleanedString = cleanSet(mySet, 'ban');
 * console.log(cleanedString); // Output: 'anana-cherry'
 */
export default function cleanSet(set, startString) {
  // Check if startString is valid
  if (!startString || !startString.length || typeof startString !== 'string') {
    return '';
  }

  // Initialize the final cleaned string
  let finalString = '';

  // Iterate over each element in the Set
  set.forEach((element) => {
    // Check if the element starts with the specified startString
    if (element && element.startsWith(startString)) {
      // Append the modified element to the final string
      finalString += `${element.slice(startString.length)}-`;
    }
  });

  // Remove the trailing '-' and return the final cleaned string
  return finalString.slice(0, finalString.length - 1);
}
