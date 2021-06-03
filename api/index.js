const postRepository = require("../db");
const fastify = require("./fastify");
const loadRoutes = require("./routes");

const start = async () => {
  try {
    await loadRoutes();
    await fastify.listen(5000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
