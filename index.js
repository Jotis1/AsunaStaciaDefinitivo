///////////////////NO BORRAR///////////////////

const Discord = require("discord.js")
const client = new Discord.Client()
const { Client } = require("discord.js")
const randomPuppy = require("random-puppy")
const request = require('request')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const { YTSearcher } = require("ytsearcher");
const { Player, Queue } = require("discord-player");
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})
const searcher = new YTSearcher({
    key: "AIzaSyB_hsEQxxkpf3F6jbaDiOzhsWWm4e6tKlw",
    revealed: true
});
const fs = require("fs");
const { isFunction } = require("util")

client.login("Nzc4OTUyOTQzNTMzNDI0NjUw.X7ZedQ.zbtoohRLD4yLybyKe27R501_JZQ")

///////////////////COMANDO READY///////////////////
const prefix = "as!"
client.comandos = new Discord.Collection()

let archivos = fs.readdirSync("./comandos").filter((f) => f.endsWith(".js"))

client.on("ready", () => {

    console.log("Bienvenido a Aincrad") 
    client.user.setPresence({
        status: "online",
        activity: {
            name: "Sword Art Online",
            type: "PLAYING"

        }
    })

})


for(var archi of archivos) {
    let comando = require("./comandos/"+archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi+" fue cargado correctamente.")
}


client.on('message', async message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(prefix)) return;
    
    
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command))
    if(cmd){
      return cmd.run(client, message, args)
    }  

    if (!message.guild) return;
    if (message.author.bot) return;
    
    ///////////ALGÚN DÍA :C//////////
    
    const levels = require('discord-xp')
    levels.setURL("mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data")
    const mongoose = require('mongoose')
    mongoose.connect('mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

    
   
    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await levels.fetch(message.author.id, message.guild.id);
        const embed = new Discord.MessageEmbed()
            .setColor("00ff2e")
            .setTitle("LO LOGRÓ")
            .setDescription(`¡Enhorabuena @${message.author.username}#${message.author.discriminator}! Ahora eres nivel ${user.level}!`)
        message.channel.send(embed);
    }
   
})

