var TelegramBot = require('node-telegram-bot-api');

var token = "ADD_YOUR_TOKEN_HERE";
var opt = { polling: true };


var bot = new TelegramBot(token, opt);

bot.on('message', function (msg) {
  // console.log(msg);
  var id = msg.chat.id;
  var echo = msg.text;
  if (echo == "Hi" || echo == "Hello" || echo == "BC") {
    echo1 = "Fuck off";
  }
  else if (echo == "Who?" || echo == "Who are you?" || echo == "Kon?") {
    echo1 = "I'm Bot created By Mr. Saini";
  }
  else if (echo == "help" || echo == "need help" || echo == "I'm stuck") {
    echo1 = "COntact to Mr. Saini @rohits17";

  }
  else {
    echo1 = "what a noob :( , Sad for you dude!"
  }
  bot.sendMessage(id, echo1);
});