const logger = require("../../logger");

const commandParser = require("../../util/commandParser");
const commandExecuter = require("./executers/commandExecuter");

const { ADMIN_ID } = require("../../../../config.json");

/**
 *  @param {import('bull').Job<import("node-telegram-bot-api").Message>}  job
 */
const messageJobProcessor = async ({ data: message }) => {
  try {
    const {
      from: { id },
    } = message;

    if (id !== ADMIN_ID) return;

    const command = commandParser(message);

    if (command) {
      await commandExecuter(command, message);
    }
  } catch (err) {
    logger.err(err);
  }
};

module.exports = messageJobProcessor;
