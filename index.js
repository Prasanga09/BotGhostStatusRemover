const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Put what you want here for publishing in the preview website!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()


client.on('ready', () => {
 client.user.setActivity('Bot status set here', { type: 'Type PLAYING, WATCHING or LISTENING here or it will not work'})
})

client.login(process.env.token);
