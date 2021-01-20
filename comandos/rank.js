const levels = require('discord-xp')
levels.setURL("mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data")
const Discord = require("discord.js")
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = {
    nombre: "rank",
    alias: ["level"],
    run: async (client, message, args) => {
        const user = await levels.fetch(message.author.id, message.guild.id);
        const embed = new Discord.MessageEmbed()
        .setColor("00ff2e")
        .setTitle("Nivel")
        .setDescription(`Eres nivel ${user.level}!`)
        message.channel.send(embed);

    }

}