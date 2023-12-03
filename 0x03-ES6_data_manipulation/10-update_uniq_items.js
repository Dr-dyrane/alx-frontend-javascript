/**
 * Updates unique items in a Map by setting their values to 100 if their original value is 1.
 *
 * @param {Map} items - The Map to process, where keys are items and values are quantities.
 * @returns {Map} - The updated Map with unique items modified.
 * @throws Will throw an error if the input is not a Map.
 * @example
 * // Example usage:
 * const originalMap = new Map([
 *   ['Apples', 1],
 *   ['Oranges', 2],
 *   ['Bananas', 1],
 * ]);
 * const updatedMap = updateUniqueItems(originalMap);
 * console.log(updatedMap);
 * // Output:
 * // Map {
 * //   'Apples' => 100,
 * //   'Oranges' => 2,
 * //   'Bananas' => 100
 * // }
 */
export default function updateUniqueItems(items) {
  // Check if the input is a Map
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over each entry in the Map
  for (const [key, value] of items) {
    // Check if the value is 1 (unique item)
    if (value === 1) {
      // Set the value to 100 for unique items
      items.set(key, 100);
    }
  }

  // Return the updated Map
  return items;
}
