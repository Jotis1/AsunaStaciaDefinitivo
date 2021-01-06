const Discord = require('discord.js')
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']})
const ReactionRoleManager = require("discord-reaction-role")
const prefix = "aq!"


client.on("ready", () => {

    console.log("Ohayou!") 
    client.user.setPresence({
        status: "idle",
        activity: {
            name: "Konosuba",
            type: "WATCHING"

        }
    })

})

const embed = new Discord.MessageEmbed()
.setTitle('Verificación')
.setDescription('Reacciona al emoji de abajo para entrar al servidor')
.setImage('https://images.alphacoders.com/798/thumb-1920-798251.png')
.setColor('RANDOM')





client.on('message', async message => {
    if (message.content.startsWith(`${prefix}reactionrole`)){
        const msg = await message.channel.send(embed)
        msg.react('🗼')
        message.delete()

    }
})

client.on('messageReactionAdd', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return

    if(reaction.message.channel.id === "775002373814091776"){
        if(reaction.emoji.name === "🗼") await reaction.message.guild.members.cache.get(user.id).roles.add('775005310754095134')     
    } 
})

client.on('messageReactionRemove', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return

    if(reaction.message.channel.id === "775002373814091776" ){
        if(reaction.emoji.name === "🗼") await reaction.message.guild.members.cache.get(user.id).roles.remove('775005310754095134')        
    }
})
 

client.on('message', async (message) => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (command === "omedetou"){
        message.react('☑️')
        message.channel.send(`Omedetou. Has completado mi evento. ¿Te ha gustado como me ha quedado? Espero que no haya sido muy difícil... :two_hearts:`)
    }




})


client.login(process.env.TOKEN)