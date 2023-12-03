/**
 * Creates an Int8 typed array with the specified length, setting a value at the given position.
 *
 * @param {number} length - The length of the Int8 typed array.
 * @param {number} position - The position at which to set the value.
 * @param {number} value - The value to set at the specified position.
 * @returns {DataView} - A DataView representing the Int8 typed array.
 * @throws Will throw an error if the position is outside the valid range.
 * @example
 * // Example usage:
 * const int8Array = createInt8TypedArray(4, 2, 42);
 * console.log(new Int8Array(int8Array.buffer)); // Output: [0, 0, 42, 0]
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is outside the valid range
  if (position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Create a DataView to work with the ArrayBuffer
  const view = new DataView(buffer);
  // Set the Int8 value at the specified position

  view.setInt8(position, value);
  // Return the DataView representing the Int8 typed array
  return view;
}
