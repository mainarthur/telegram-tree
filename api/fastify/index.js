const fastify = require("fastify").default({
  logger: { prettyPrint: { colorize: true } },
});

module.exports = fastify;
