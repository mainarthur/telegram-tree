const fastify = require("fastify").default({
  logger: true,
});

fastify.get("/", async (_request, _reply) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await fastify.listen(5000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
