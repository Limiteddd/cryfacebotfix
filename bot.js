const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'mcking') {
    	message.reply('<---Szia! MCKing vagyok! 0-24 shit intel pentiumos mémet fogom nyomni,és macfagezni és basztatni mindenkit :smile:');
  	}
    if (message.content === 'rpg') {
    	message.reply('De bazdmeg,ebbe a játékba csak rpgvel lehet nyerni.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
