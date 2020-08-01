process.env.NTBA_FIX_319 = 1;
require('dotenv/config')

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});
const {getMessageReply} = require('./services/app');

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  var reply = getMessageReply(messageText);

  
  bot.sendMessage(chatId, reply);
});


console.log("Telegram bot is live");
