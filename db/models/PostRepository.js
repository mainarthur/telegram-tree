const { Pool } = require("pg");
const Post = require("./Post");

class PostRepository {
  static DEFAULT_OPTIONS = { postsLimit: 20 };
  /**
   *
   * @param {Pool} pool
   * @param {Object} options
   *
   */
  constructor(pool, options = {}) {
    this.pool = pool;
    this.options = { ...PostRepository.DEFAULT_OPTIONS, ...options };
  }

  /**
   * @param {Number} [page]
   * @returns {Promise<Post[]>}
   */
  async getPosts(page) {
    if (typeof page !== "number" && page != undefined)
      throw new Error('"page" must be a number');

    const pageNumber = page ?? 0;
    const { postsLimit } = this.options;
    const result = await this.pool.query(
      `SELECT * FROM posts ORDER BY id DESC LIMIT $1 OFFSET $2`,
      [postsLimit, pageNumber * postsLimit]
    );

    return result.rows.map((post) => new Post(post));
  }

  /**
   * @param {Post} post
   */
  async addPost(post) {
    if (!(post instanceof Post))
      throw new Error('"post" must be an instance of Post class');

    return this.pool.query(
      `INSERT INTO posts (name, description, link) VALUES ($1, $2, $3)`,
      post.toArray()
    );
  }
}

module.exports = PostRepository;
