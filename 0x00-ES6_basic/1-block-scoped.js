/**
 * Exporting a function named taskBlock which takes a boolean argument trueOrFalse.
 *
 * @param {boolean} trueOrFalse - A boolean argument to determine the value of the task.
 * @returns {Array} An array containing the values of task and task2.
 */
export default function taskBlock (trueOrFalse) {
  /**
     * Initializing a variable task with a value of false using let (mutable).
     *
     * @type {boolean}
     */
  let task = false;

  /**
     * Initializing a constant variable task2 with a value of true (immutable).
     *
     * @type {boolean}
     */
  const task2 = true;

  // Checking the value of trueOrFalse
  if (trueOrFalse) {
    // If true, update the value of the mutable variable task to true.
    task = true;
  }

  /**
     * Returning an array containing the values of task and task2.
     *
     * @type {Array}
     */
  return [task, task2];
}
