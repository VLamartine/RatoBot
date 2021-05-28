const { mutedUsers } = require('../shared/data');

module.exports = {
  name: 'mute',
  description: 'Muta a pessoa mencionada',
  execute(message, args = null) {
  
    const {client, guild} = message;
    const user = message.mentions.members.first();
    
    if(user.user.id == process.env.ME){
      message.channel.send(`Por favor, né`);
      return;
    }

    user.voice.setMute(true);

    if(mutedUsers.size == 0){
      client.on('voiceStateUpdate', (_, newState) => onVoiceStateUpdate(newState, client) )
    }

    mutedUsers.add(`${guild.id}__${user.user.id}`);
  },
};

const onVoiceStateUpdate = async (newState, client) => {
  if(!mutedUsers.has(`${newState.guild.id}__${newState.id}`)) return;
  if(newState.serverMute) return;

  const guild = await client.guilds.fetch(newState.guild.id);

  const user = await guild.members.fetch(newState.id);
  user.voice.setMute(true);
}