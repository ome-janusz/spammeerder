const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const auth = require("./auth.json");

var channelToSend = null;

client.on("ready", () => {
  console.log(`Bot has started as ${client.user.tag}`);
  client.channels.fetch(config.channelId)
    .then(channel => channel = channelToSend = channel);
});

setInterval(function() {
  if (channelToSend != null) {
    channelToSend.send("test https://www.google.com")
  }
}, config.interval);

client.login(auth.token);
