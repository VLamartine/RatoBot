const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./const.json');

require('dotenv').config();

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync(`${__dirname}/commands/`)
  .filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

client.once('ready', () => {
  console.log('Ready');
});

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) {
    message.reply('Este comando não existe');
    return;
  }
  const command = client.commands.get(commandName);
  await command.execute(message, args);
});

client.login(process.env.BOT_TOKEN);