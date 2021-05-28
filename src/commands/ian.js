module.exports = {
  name: 'ian',
  description: 'Manda o Ian tomar no cú',
  execute(message, args = null) {
    message.channel.send('Vai tomar no cú, Ian', { tts: true });
  },
};
