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
    if (typeof id !== "number" && id !== undefined)
      throw new Error('"id" must be a number');
    if (typeof description !== "string" && description !== undefined)
      throw new Error('"description" must be a string');
    this.id = id;
    this.name = name;
    this.description = description;
    this.link = link;
  }

  toArray() {
    return [this.name, this.description, this.link];
  }
}

module.exports = Post;
