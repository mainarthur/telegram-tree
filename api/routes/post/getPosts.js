const { Server, IncomingMessage, ServerResponse } = require("http");
const postRepository = require("../../../db");

/**
 * @type {import("fastify").RouteOptions<Server, IncomingMessage, ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown, import("fastify").FastifySchema>}
 */
const getPostsRoute = {
  method: "GET",
  url: "/:page",
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
  handler: async function (request, _reply) {
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

    return postRepository.getPosts(pageNumber);
  },
};

module.exports = getPostsRoute;
