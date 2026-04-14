/**
 * Represents an item stored in the database.
 */
class ScriptDbMap {
  constructor(data) {
    if (data) {
      Object.assign(this, data);
    }
  }

  /**
   * Returns the ID of the item.
   * @returns {String}
   */
  getId() {
    return this.id;
  }

  /**
   * Returns the JSON string representation.
   * @returns {String}
   */
  toJson() {
    return JSON.stringify(this);
  }
}
