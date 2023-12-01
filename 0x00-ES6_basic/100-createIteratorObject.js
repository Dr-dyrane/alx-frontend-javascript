/**
 * Creates an iterator object for iterating over employees in a report.
 * @param {Object} report - The report containing department-wise employee lists.
 * @returns {Object} An iterator object conforming to the iterator protocol.
 */
export default function createIteratorObject(report) {
  // Create a flat array of all employees from different departments
  const flatEmployees = Object.values(report.allEmployees).flatMap((department) => department);

  // Initialize the current index for iteration
  let currentIndex = 0;

  // Iterator object
  return {
    /**
       * Advances the iterator and returns the next employee.
       * @returns {Object} An object with the next employee value and a flag indicating
       * if iteration is done.
       */
    next() {
      // Check if the end of the array is reached
      if (currentIndex >= flatEmployees.length) {
        return { done: true };
      }

      // Get the current employee
      const currentEmployee = flatEmployees[currentIndex];
      currentIndex += 1; // Move to the next index for the next iteration

      // Return the current employee and indicate that iteration is not done
      return { value: currentEmployee, done: false };
    },

    /**
       * Returns the iterator object itself, allowing it to be used in a for...of loop.
       * @returns {Object} The iterator object.
       */
    [Symbol.iterator]() {
      return this;
    },
  };
}
