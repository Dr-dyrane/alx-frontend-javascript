/**
 * Creates an object representing a department with its associated employees.
 *
 * @param {string} departmentName - The name of the department.
 * @param {Array} employees - An array of employees belonging to the department.
 * @returns {Object} An object representing the department and its employees.
 */
export default function createEmployeesObject(departmentName, employees) {
  /**
     * The object representing the department and its employees.
     *
     * @type {Object}
     * @property {string} departmentName - The name of the department.
     * @property {Array} employees - An array of employees belonging to the department.
     */
  return {
    [departmentName]: employees,
  };
}
