const postRepository = require("../db");

const fastify = require("fastify").default({
  logger: { prettyPrint: { colorize: true } },
});

fastify.get(
  "/:page",
  {
    schema: {
      params: {
        type: "object",
        properties: {
          page: {
            type: "integer",
          },
        },
      },
    },
  },
  async (request, _reply) => {
    /**
     * @type {*}
     */
    const { page } = request.params;
    const pageNumber = parseInt(page);

    if (pageNumber < 0 || pageNumber > Number.MAX_SAFE_INTEGER) {
      return {
        statusCode: 400,
        error: "Bad Request",
        message: "params.page is out of range",
      };
    }

    return await postRepository.getPosts(pageNumber);
  }
);

const start = async () => {
  try {
    await fastify.listen(5000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
