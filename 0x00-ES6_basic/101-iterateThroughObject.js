/**
 * Concatenates elements of an array using the pipe (|) separator.
 * @param {Array} reportWithIterator - An array of elements to concatenate.
 * @returns {string} A string formed by joining array elements with pipe separators.
 */
export default function iterateThroughObject (reportWithIterator) {
  // Use the join method to concatenate array elements with the pipe separator
  return reportWithIterator.join(' | ');
}
