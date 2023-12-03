/**
 * Filters an array of student objects based on the specified city.
 *
 * @param {Array} array - The array of student objects.
 * @param {string} city - The city used to filter students.
 * @returns {Array} - An array containing only the students from the specified city.
 * @example
 * // Example usage:
 * const students = [
 *   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
 *   { id: 2, firstName: 'James', location: 'Columbia' },
 *   { id: 5, firstName: 'Serena', location: 'San Francisco' },
 * ];
 * const studentsInSF = getStudentsByLocation(students, 'San Francisco');
 * console.log(studentsInSF);
 * // Output:
 * // [
 * //   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
 * //   { id: 5, firstName: 'Serena', location: 'San Francisco' },
 * // ]
 */
export default function getStudentsByLocation(array, city) {
  // Use the filter function to select students from the specified city
  return array.filter((student) => student.location === city);
}
