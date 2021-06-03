class Post {
  /**
   * @param {Object} param
   * @param {String} param.name
   * @param {String} param.link
   * @param {String} [param.description]
   * @param {number} [param.id]
   */
  constructor({ id, name, description, link }) {
    if (typeof name !== "string") throw new Error('"name" must be a string');
    if (typeof link !== "string") throw new Error('"link" must be a string');

    if (id !== null && id !== undefined) {
      if (typeof id !== "number") throw new Error('"id" must be a number');
      this.id = id;
    }
    if (description !== null && description !== undefined) {
      if (typeof description !== "string")
        throw new Error('"description" must be a string');
      this.description = description;
    }

    this.name = name;
    this.link = link;
  }

  toArray() {
    return [this.name, this.description, this.link];
  }
}

module.exports = Post;
