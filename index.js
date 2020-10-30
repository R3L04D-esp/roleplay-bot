const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

///////////////////////////START BOT CODE/////////////////////////////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'r!role') {
    msg.reply('Accede al servidor de Roleplay hablando con alguno de los <@&771145930467573802>');
  }
});

client.login('TOKEN');