const { mutedUsers } = require('../shared/data');

module.exports = {
  name: 'unmute',
  description: 'Manda o Ian tomar no cú',
  execute(message, args = null) {
    const {client, guild} = message;
    const user = message.mentions.members.first();
    if(message.author.id == user.user.id){
      message.channel.send(`Tentando se desmutar? Tsc, tsc`);
      return;
    }
    mutedUsers.delete(`${guild.id}__${user.user.id}`);
    
    user.voice.setMute(false);
  },
};