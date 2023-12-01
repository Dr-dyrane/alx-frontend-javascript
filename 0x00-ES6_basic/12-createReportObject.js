/**
 * Creates a report object with information about all employees and the number of departments.
 *
 * @param {Object} employeesList - An object - departments & their respective employee lists.
 * @returns {Object} A report object with all employees &
 *                   - a method to get the number of departments.
 */
export default function createReportObject(employeesList) {
  /**
     * The report object containing all employees and a method to get the number of departments.
     *
     * @type {Object}
     * @property {Object} allEmployees - An object - all employees categorized by department.
     * @property {Function} getNumberOfDepartments - A method to get the number of departments.
     */
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(empList) {
      // Returning the number of departments based on the keys in the provided employee list
      return Object.keys(empList).length;
    },
  };
}
