const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');
require("./html.js");
const client = new Discord.Client({
  syncStatus: false,
  checkUpdate: false
});

const r = new Discord.RichPresence(ipc=true)
	.setApplicationId('1207224645552574474') //dont Change Application ID
	.setType('idle')
	.setName('ChikenSMP') // title Activity
  .setURL('https://discord.gg/92krfhV84b') //url discord
	.setDetails("Skyblock Minecraft Server IP:Cooming Soon") //set details Bebas
  .setStartTimestamp(new Date())  //jangan diubah
	.setAssetsLargeImage('https://cdn.discordapp.com/icons/1206168770914029608/0392e1812fad076f166cbb0d4feee289.png?size=4096') //logo
	.setAssetsLargeText('My Server')
	.addButton('ChikenSMP', 'https://discord.gg/92krfhV84b')  //kalo ada yng beli with no button hapus
  .addButton('Join Now', 'https://discord.gg/92krfhV84b')   //klo ada yng beli no button / 1 button hapus


client.on('ready', async () => {
  console.log(`${client.user.username} is ready! ©ChikenSMP`);
  client.user.setActivity(r);
})

client.login(process.env.TOKEN);