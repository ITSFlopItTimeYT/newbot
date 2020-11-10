//stay-alive
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Uptimebot!'));

app.listen(port, () => console.log(`Example app listening at com.sun.net.httpserver.HttpServer:${port}`));
//bot-code
require('module-alias/register')
const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const antiAd = require('@features/anti-ad')

const config = require('@util/config.json')

client.on('ready', async () => {
  console.log('The client is ready!')

  const baseFile = 'command-base.js'
  const commandBase = require(`@root/commands/${baseFile}`)
  const loadCommands = require('@root/commands/load-commands')
  //const modLogs = require('./mod-logs')
  //const loadLanguages = require('./language.js')
  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }
  antiAd(client)
  //readCommands('commands')
  loadCommands(client)
  //modLogs(client)
  //loadLanguages(client)
  //commandBase.loadPrefixes(client)
})

client.login(process.env.token)