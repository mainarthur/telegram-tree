const postRepository = require("../db");
const fastify = require("./fastify");
const fastifyCors = require("fastify-cors").default;
const loadRoutes = require("./routes");

const start = async () => {
  try {
    fastify.register(fastifyCors);
    await postRepository.load();
    await loadRoutes();
    await fastify.listen(5000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
