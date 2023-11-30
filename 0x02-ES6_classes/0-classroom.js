/**
 * Represents a classroom with a maximum number of students.
 *
 * @class ClassRoom
 */
export default class ClassRoom {
  /**
     * Creates an instance of ClassRoom.
     *
     * @param {Number} maxStudentsSize - The maximum number of students the classroom can accommodate.
     */
  constructor (maxStudentsSize) {
    /**
       * The maximum number of students the classroom can accommodate.
       * @type {Number}
       * @private
       */
    this._maxStudentsSize = maxStudentsSize;
  }
}
