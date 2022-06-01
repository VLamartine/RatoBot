module.exports = {
  name: 'ian',
  description: 'Cala a boca, Ian',
  execute(message, args = null) {
    message.channel.send('Cala a boca, Ian', { tts: true });
  },
};
