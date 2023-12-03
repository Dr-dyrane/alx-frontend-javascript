/**
 * Extracts student IDs from an array of student objects.
 *
 * @param {Array} array - The array of student objects.
 * @returns {Array} - An array containing only the student IDs.
 * @example
 * // Example usage:
 * const students = [
 *   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
 *   { id: 2, firstName: 'James', location: 'Columbia' },
 *   { id: 5, firstName: 'Serena', location: 'San Francisco' },
 * ];
 * const studentIds = getListStudentIds(students);
 * console.log(studentIds);
 * // Output:
 * // [1, 2, 5]
 */
export default function getListStudentIds(array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    // If not an array, return an empty array
    return [];
  }

  // Use the map function to extract student IDs
  return array.map((student) => student.id);
}
