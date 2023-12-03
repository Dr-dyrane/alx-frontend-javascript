/**
 * Retrieve a list of students.
 *
 * @returns {Array} List of student objects.
 * @example
 * // Example usage:
 * const students = getListStudents();
 * console.log(students);
 * // Output:
 * // [
 * //   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
 * //   { id: 2, firstName: 'James', location: 'Columbia' },
 * //   { id: 5, firstName: 'Serena', location: 'San Francisco' },
 * // ]
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
