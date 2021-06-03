const fastify = require("../fastify");
const getPostsRoute = require("./post/getPosts");

const loadRoutes = async () => {
  fastify.route(getPostsRoute);
};

module.exports = loadRoutes;
