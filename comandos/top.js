const levels = require('discord-xp')
levels.setURL("mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data")
const Discord = require("discord.js")
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = {
    nombre: "top",
    alias: ["lb"],
    run: async (client, message, args) => {
        const rawLeaderboard = await levels.fetchLeaderboard(message.guild.id, 10);
        if (rawLeaderboard.length < 1) return reply("Nadie está en la tabla aún");
        
        const leaderboard = await levels.computeLeaderboard(client, rawLeaderboard); 
        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);
        const embed = new Discord.MessageEmbed()
        .setColor("00ff2e")
        .setTitle("Top del Servidor")
        .setDescription(`${lb.join("\n\n")}`)
        message.channel.send(embed);

    }

}
