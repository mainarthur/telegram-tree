class Post {
  constructor({ id, name, description, link }) {
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
