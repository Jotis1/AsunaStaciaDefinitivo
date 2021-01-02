const Discord = require("discord.js")
const client = new Discord.Client()





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

client.login(process.env.TOKEN)