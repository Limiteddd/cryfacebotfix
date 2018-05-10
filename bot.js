const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'nem") {
    	message.reply('de miért én sohasem idegesítettelek te túlreagálod a dolgokat ne legyél már ilyen nem is vagyok buzi, te macfag mingyárt benyomom a fos mémeimet az intel pentiumot meg az ilyen mémzacskómból szedegetett faszságaimat amik nem és mémek de be fogom játszani 0-24-be , mert viccesnek találom de körülöttem mindenki utál már emiatt és a suliba is oh btw a v2 akivel mindenkit basztattam neve Bakos Dorina https://www.facebook.com/dorina.bakos.5 belé voltam szerelmes és ezzel baszogattam mindenkit menjünk már xp-t szétbaszni mert mingyárt nekiállok 2-15 mp-ig tartó earrape tartalmat gyártani de azért a limited meg a sajtos tartalma a szar amégy miért telepíted fel a win10 az a legszarabb mindig a csak a szart csinálod na de én tudom mi az a legjobb oh basszus anyám benyit mondom MI A FASZOMAT A AKARSZ TAKAROGGYÁMÁ a tesóm is egy buzi mert tisztelettel beszél az anyjával. oh ne sajtos letiltott pedig én megváltoztam mekkora egy buzi raptor is megutált ő is egy buzi mindig baszogatnak pedig én egy árva kis bárány vagyok mingyárt átmegyek sajtosarc discordjára ott kedvesebben bánnak velem de buzi ez a sajtos hogy nem akarja újra a faszságaimat hallgatni 0-24-ben mekkora egy buzi niggarescuesról is folyamatosan bannolnak de én nem is csinálok semmi rosszat amúgy mekkora buzi a sajtos hogy megveszi a játékokat és nem szereti hogyha a klánjába csalnak a játékosok ez milyen buzis már "');
  	}
    if (message.content === 'rpg') {
    	message.reply('De bazdmeg,ebbe a játékba csak rpgvel lehet nyerni.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
