const Command = require('./Command')

const bot = require('../bots/bot')

const t18g = require('../locales')

const { ParseMode, ChatAction } = require('../constants')

class StartCommand extends Command {
  constructor() {
    super()
  }

  /**
   * @returns {import('node-telegram-bot-api').ChatAction}
   */
  get action() {
    return ChatAction.typing
  }

  /**
   * @param {import('./Command').Payload} payload
   */
  async method({ chatId, locale }) {
    return bot.sendMessage(chatId, t18g(locale)`start`, {
      parse_mode: ParseMode.HTML,
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: t18g(locale)`start_search`,
              switch_inline_query: '',
            },
          ],
        ],
      },
    })
  }
}

module.exports = StartCommand
