import ClassRoom from './0-classroom.js';

/**
 * Initializes an array of ClassRoom objects with specific sizes.
 *
 * @function initializeRooms
 * @returns {Array<ClassRoom>} An array of ClassRoom objects.
 */
export default function initializeRooms () {
  /**
   * An array of ClassRoom objects with specific sizes.
   * @type {Array<ClassRoom>}
   */
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];

  return rooms;
}
