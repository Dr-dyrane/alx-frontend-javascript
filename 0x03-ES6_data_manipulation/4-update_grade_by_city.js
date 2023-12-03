/**
 * Updates student grades based on the specified city.
 *
 * @param {Array} array - The array of student objects.
 * @param {string} city - The city used to filter students.
 * @param {Array} newGrades - An array of objects with new grades and corresponding student IDs.
 * @returns {Array} - An updated array of student objects with grades.
 * @example
 * // Example usage:
 * const students = [
 *   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
 *   { id: 2, firstName: 'James', location: 'Columbia' },
 *   { id: 5, firstName: 'Serena', location: 'San Francisco' },
 * ];
 * const newGrades = [
 *   { studentId: 1, grade: 'A' },
 *   { studentId: 5, grade: 'B' },
 * ];
 * const updatedStudents = updateStudentGradeByCity(students, 'San Francisco', newGrades);
 * console.log(updatedStudents);
 * // Output:
 * // [
 * //   { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'A' },
 * //   { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 'B' },
 * // ]
 */
export default function updateStudentGradeByCity(array, city, newGrades) {
  // Filter students based on the specified city
  return array
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the corresponding grade for the student
      const matchingGrade = newGrades.find((gradeEntry) => gradeEntry.studentId === student.id);
      // Update the student object with the new grade
      return { ...student, grade: (matchingGrade && matchingGrade.grade) || 'N/A' };
    });
}
