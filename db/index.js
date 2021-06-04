const { Pool } = require("pg");

const { POSTGRESS } = require("../config.json");
const PostRepository = require("./models/PostRepository");

const pool = new Pool(POSTGRESS);

const postRepository = new PostRepository(pool);

module.exports = postRepository;
