const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Its lol everywhere!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()


client.on('ready', () => {
 client.user.setActivity(`bit.ly/pd2-bot | z/help`, { type: 'PLAYING'})
})

client.login(process.env.token);
