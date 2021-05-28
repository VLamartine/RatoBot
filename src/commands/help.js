const { prefix } = require('../const.json');
module.exports = {
  name: 'help',
  description: 'Lista os comandos do rato',
  execute(message, args) {
    const { commands } = message.client;
    let list = 'Comandos:\n>>> ';
    commands.forEach(
      (command) => (list += `${command.name}: ${command.description}\n`)
    );
    message.channel.send(list);
  },
};
