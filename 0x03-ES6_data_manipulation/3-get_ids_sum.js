/**
 * Calculates the sum of student IDs in an array of student objects.
 *
 * @param {Array} array - The array of student objects.
 * @returns {number} - The sum of student IDs.
 * @example
 * // Example usage:
 * const students = [
 *   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
 *   { id: 2, firstName: 'James', location: 'Columbia' },
 *   { id: 5, firstName: 'Serena', location: 'San Francisco' },
 * ];
 * const idsSum = getStudentIdsSum(students);
 * console.log(idsSum);
 * // Output:
 * // 8
 */
export default function getStudentIdsSum(array) {
  // Use the reduce function to calculate the sum of student IDs
  return array.reduce((sum, student) => sum + student.id, 0);
}
