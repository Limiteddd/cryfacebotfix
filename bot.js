const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'mcking') {
    	message.reply('<---Szia! MCKing vagyok! 0-24 shit intel pentiumos mémet fogom nyomni,és macfagezni és basztatni mindenkit :smile:');
  	}
    if (message.content === 'raptor') {
    	message.reply('A böröntben fog megrohadni DankBoostal együtt!!! :angry:');
  	}
      if (message.content === 'ddos') {
    	message.reply('A digit nem lehet ddosolni haha :smile:');
  	}
     if (message.content === 'youtube') {
    	message.reply('Áh,lehet holnapután újrakezdem aztán abbahagyom,és megint újrakezdem 2 hét múlva! :)');
  	}
     if (message.content === 'idő') {
    	message.reply('INTEL PENTIUM PROSESSOR IDŐ!');
  	}
  if (message.content === 'monthyx') {
    	message.reply('Monthyx is folyton basztatott feltöri a steam akkom leakel stb :sad:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
