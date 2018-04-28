const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'miafasz') {
    	message.reply('Mi a faszom ez mi a gecim ez?');
  	}
    if (message.content === 'rpg') {
    	message.reply('De bazdmeg,ebbe a játékba csak rpgvel lehet nyerni.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
