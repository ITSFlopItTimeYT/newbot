module.exports = {
  commands: 'ping',
  description: "Calculates ping",
  callback: (message, arguments, text, client) => {
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })
  },
}