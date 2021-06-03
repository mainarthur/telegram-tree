const { Pool } = require("pg");

const { POSTGRESS } = require("../config.json");
const PostRepository = require("./models/PostRepository");

const pool = new Pool(POSTGRESS);

module.exports = new PostRepository(pool);
