const path = require('path')
const bot = require('./src/bots/bot')
const logger = require('./src/logger')
const updateHandler = require('./src/bots/updateHandler')

const { ALLOWED_UPDATES } = require('../config.json')

void (async () => {
  try {
    for (const updateType of ALLOWED_UPDATES) {
      // @ts-ignore
      bot.on(updateType, updateHandler(updateType))
    }

    await bot.startPolling({
      polling: {
        params: {
          allowed_updates: ALLOWED_UPDATES,
        },
      },
    })

    logger.log(`Bot is started at ${new Date().toLocaleString()}`)
  } catch (err) {
    logger.err(err)
  }
})()
