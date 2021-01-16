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
client.login(process.env.TOKEN)

///////////////////COMANDO READY///////////////////

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

///////////////////PREFIX///////////////////


client.on("message", async (message) => {

    if (!message.content.startsWith(prefix)) return;



    const args = message.content.slice(prefix.length).trim().split(/ + /g) /// Aquí definimos que los argumentos

    /// vienen despues del prefijo

    const command = args.shift().toLowerCase() /// Aquí definimos que el "command" es el comando que el usuario ingreso
})

const prefix = "as!"

///////////////////RESPUESTAS///////////////////

client.on("message", async (message) => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()


    if (command === "user") {
        let user = message.mentions.members.first() || message.member;
    
    
        const embed = new Discord.MessageEmbed()
          .setTitle(`${user.user.username}`)
          .setColor(`RANDOM`)
          .setImage("https://images-ext-2.discordapp.net/external/NdhnG_GmVgCdqR5iaRUeWIwRVzORsxq6mIw_0RfG_nc/https/media.discordapp.net/attachments/706850303189975141/707264945661935689/kkkk.gif")
          .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
          .addFields(
            {
              name: "Apodo: ",
              value: user.user.username,
              inline: true
            },
            {
              name: "Discriminador: ",
              value: `${user.user.discriminator}`,
              inline: true
            },
            {
              name: ":id:",
              value: user.user.id
            },
            {
          
  
              name: "Fecha de creación:",
              value: user.user.createdAt.toLocaleDateString("en-us"),
              inline: true
            },
            {
              name: "Fecha de unión:",
              value: user.joinedAt.toLocaleDateString("en-us"),
              inline: true
            },
            {
              name: "Avatar: ",
              value: `[Click Here](${user.user.displayAvatarURL()})`
            },
            {
              name: "Roles Del Usuario",
              value: user.roles.cache.map(role => role.toString()).join(" ,"),
              inline: true
            }
          );
    
        await message.channel.send(embed);
    }
    if (command === "say"){

        let texto = args.join(" ")
        if (!texto) return message.channel.send("**Ingresa Un Texto**").then(msg => msg.delete({timeout: 5000}))
        message.delete().catch() 
        message.channel.send(texto)
    }
    if (command === "clear"){
        let cantidad = args[0]

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
        if (!cantidad) return message.channel.send("Ingresa una cantidad. (Menor a 100 mensajes)")
        if (isNaN(cantidad)) return message.channel.send("Pon un número.")
        if (cantidad <= 0) return;
        cantidad = parseInt(cantidad)
        message.channel.bulkDelete(cantidad + 1)
        message.channel.send('Se han borrado ' + cantidad + ' mensajes.').then(msg => msg.delete({timeout: 5000}))
    }

    if (command === "meme"){
        const meme = ["meme"]
        const random = meme[Math.floor(Math.random() * meme.length)]          

        const img = await randomPuppy(random)
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setImage(img) 
        .setTitle("**Meme:**")
        .setDescription("**Categoría:**" + random)
        message.channel.send(embed) 
    }
    
    if (command === "hi"){ 
            message.react('👋')
            return message.channel.send(`Ohayou! :two_hearts: `) 
    }

    if (command === "yt"){ 
        message.channel.send(`:crossed_flags:  El canal de VictoRuch es este! Échale un vistazo  :crossed_flags: : https://www.youtube.com/channel/UC5weJ8jqHA3qyc1mI3vC8-w `) 
    }
    if (command === "erina"){ 
        message.react('👩‍🍳')
        const erina = new Discord.MessageEmbed()
        .setTitle('Cocinemos juntos Chelin')
        .setColor('ff0000')
        .setImage('https://cdn.discordapp.com/avatars/318120108662849538/f407e71073ed85c7283c823aec16f922.webp?size=4096')
        message.channel.send(erina) 
    }


    if (command === "twitch"){ 
        message.channel.send(`:crossed_flags:  ¿El Twitch de VictoRuch? ¡¡ Aquí lo tienes!!  :crossed_flags: : https://www.twitch.tv/victoruchh`) 
    }
     
    if (command === "normas"){ 
        message.channel.send(`〖:ribbon:〗 NORMAS DEL SERVER 〖:gift:〗
        :one: •Respetar al resto de miembros del servidor
        :two: •No flood y spam en el servidor
        :three: •Respetar las funcionalidades de los canales
        :five: •No pongas comandos en exceso, mencionar moderadamente y no utilizar el @ everyone
        :six: •No hacerte pasar por otra persona
        :seven: •Prohibido hablar de temas polemicos
        :eight: •Solo poner imagenes en las salas correspondientes y que sean legales y utilizar los Bots en sus respectivas salas
        :nine: •No poner links
        :keycap_ten: •Lo mas importante, pasartelo bien y disfrutar del servidor!`) 
    }
    if (command === "vr"){
        message.channel.send(`Se me viene a la cabeza... ¿VictoRuch-senpai?`)

    }
    if (command === "30092007"){
        message.react('☑️')
        message.channel.send(`¿Darling in the FranXX?`)
    }
    if (command === "3009200702"){
        message.react('☑️')
        message.channel.send(`Novelas ligeras de SAO.`)
    }
    if (command === "300920070225"){
        message.react('☑️')
        message.channel.send(`Evangelion: Asuka.`)
    }
    if (command === "30092007022514"){
        message.react('☑️')
        message.channel.send(`Administradora: Yui`)
    }
    if (command === "3009200702251411"){
        message.react('☑️')
        message.channel.send(`¿Cuántas letras tiene tu nombre?`)
    }
    if (command === "300920070225141110"){
        message.react('☑️')
        message.channel.send(`Kono Yo no Hate...0112`)
    }
    if (command === "3009200702251411101000"){
        message.react('❌')
        message.channel.send(`Muy ingenioso, pero quizás es lo opuesto...`)
    }
    if (command === "3009200702251411102200"){
        message.react('❌')
        message.channel.send(`Muy ingenioso, pero quizás es lo opuesto...`)
    }
    if (command === "3009200702251411101400"){
        message.react('☑️')
        message.channel.send(`La princesa de la Luna, en su segunda versión, los dos primeros números sobre la segunda persona...`)
    }
    if (command === "3009200702251411100200"){
        message.react('☑️')
        message.channel.send(`La princesa de la Luna, en su segunda versión, los dos primeros números sobre la segunda persona de la imagen...`)
    }
    if (command === "300920070225141110140021"){
        message.react('☑️')
        message.channel.send(`El mundo se acabará pronto. El mundo se acabará pronto. El mundo se acabará pronto. `)
    }
    if (command === "300920070225141110020021"){
        message.react('☑️')
        message.channel.send(`El mundo se acabará pronto. El mundo se acabará pronto. El mundo se acabará pronto. `)
    }  
    if (command === "30092007022514111014002117"){
        message.react('☑️')
        message.channel.send(`**SHINE**`)
    }
    if (command === "30092007022514111002002117"){
        message.react('☑️')
        message.channel.send(`**SHINE**`)
    }
    if (command === "3009200702251411101400211704"){
        message.react('☑️')
        message.channel.send(`¿Amas la vida? Yo amo Los Alpes suizos... las mejores medidas de todas.`)
    }
    if (command === "3009200702251411100200211704"){
        message.react('☑️')
        message.channel.send(`¿Amas la vida? Yo amo Los Alpes suizos... las mejores medidas de todas.`)
    }
    if (command === "3009200702251411101400211704926188"){
        message.react('☑️')
        message.channel.send(`La primera de muchas muertes, sujetó su mano. Poco importaban ya los segundos...`)
    }
    if (command === "3009200702251411100200211704926188"){
        message.react('☑️')
        message.channel.send(`La primera de muchas muertes, sujetó su mano. Poco importaban ya los segundos...`)
    }
    if (command === "300920070225141110140021170492618820"){
        message.react('☑️')
        message.channel.send(`¿El final de SAO?`)
    }
    if (command === "300920070225141110020021170492618820"){
        message.react('☑️')
        message.channel.send(`¿El final de SAO?`)
    }
    if (command === "30092007022514111014002117049261882075"){
        message.react('☑️')
        message.channel.send(`Tiburón`)
    }
    if (command === "30092007022514111002002117049261882075"){
        message.react('☑️')
        message.channel.send(`Tiburón`)
    }
    if (command === "3009200702251411101400211704926188207513092020"){
        message.react('☑️')
        message.channel.send(`Trío. Las poses más raras, las apuestas más arriesgadas.`)
    }
    if (command === "3009200702251411100200211704926188207513092020"){
        message.react('☑️')
        message.channel.send(`Trío. Las poses más raras, las apuestas más arriesgadas.`)
    }
    if (command === "3009200702251411101400211704926188207513092020101010"){
        message.react('☑️')
        message.channel.send(`Vivo en la realidad pero cuando quiero vivo en otro mundo.`)
    }
    if (command === "3009200702251411100200211704926188207513092020101010"){
        message.react('☑️')
        message.channel.send(`Vivo en la realidad pero cuando quiero vivo en otro mundo.`)
    }
    if (command === "30092007022514111014002117049261882075130920201010108"){
        message.react('☑️')
        message.channel.send(`¿El final es el comienzo, y el comienzo es el final, encontrará a la de sus recuerdos? ¿Cuántos son?`)
    }
    if (command === "30092007022514111002002117049261882075130920201010108"){
        message.react('☑️')
        message.channel.send(`¿El final es el comienzo, y el comienzo es el final, encontrará a la de sus recuerdos? ¿Cuántos son?`)
    }
    if (command === "300920070225141110140021170492618820751309202010101086"){
        message.react('☑️')
        message.channel.send(`Monster. Monster. Monster. Monster... Una maldición.`)
    }
    if (command === "300920070225141110020021170492618820751309202010101086"){
        message.react('☑️')
        message.channel.send(`Monster. Monster. Monster. Monster... Una maldición.`)
    }
    if (command === "30092007022514111002002117049261882075130920201010108613"){
        message.react('☑️')
        message.channel.send(`Las mentiras están prohibidas. Los **triángulos** no...`)
    }
    if (command === "30092007022514111014002117049261882075130920201010108613"){
        message.react('☑️')
        message.channel.send(`Las mentiras están prohibidas. Los **triángulos** no...`)
    }
    if (command === "3009200702251411100200211704926188207513092020101010861397"){
        message.react('☑️')
        message.channel.send(`Bienvenido a la que pueda ser la pregunta más difícil del juego. Haz lo que quieras con esto: 35°42′27″N 139°39′50″E`)
    }
    if (command === "3009200702251411101400211704926188207513092020101010861397"){
        message.react('☑️')
        message.channel.send(`Bienvenido a la que pueda ser la pregunta más difícil del juego. Haz lo que quieras con esto: 35°42′27″N 139°39′50″E`)
    }
    if (command === "300920070225141110140021170492618820751309202010101086139750"){
        message.react('❌')
        message.channel.send(`No he pedido eso... Bueno, realmente no he pedido nada.`)
    }
    if (command === "300920070225141110020021170492618820751309202010101086133429751"){
        message.react('❌')
        message.channel.send(`No he pedido eso... Bueno, realmente no he pedido nada.`)
    }
    if (command === "30092007022514111014002117049261882075130920201010108613970"){
        message.react('❌')
        message.channel.send(`Cero no es nada. Hay veces que hay que dar dos pasos hacía atrás para dar cuatro hacía delante.`)
    }
    if (command === "30092007022514111002002117049261882075130920201010108613970"){
        message.react('❌')
        message.channel.send(`Cero no es nada. Hay veces que hay que dar dos pasos hacía atrás para dar cuatro hacía delante.`)
    }
    if (command === "300920070225141110020021170492618820751309202010101086139714"){
        message.react('☑️')
        message.channel.send(`¡¡¡¡¡¡¡¡¡**Lo logró**!!!!!!!!!. Pero te queda el último paso, escribe esto: aq!omedetou`)
    }
    if (command === "300920070225141110140021170492618820751309202010101086139714"){
        message.react('☑️')
        message.channel.send(`¡¡¡¡¡¡¡¡¡**Lo logró**!!!!!!!!!.  Pero te queda el último paso, escribe esto: aq!omedetou`)
    }
    if (command === "300920070225141110140021170492618820751309202010101086139713"){
        message.react('❌')
        message.channel.send(`Esta respuesta está muy cerca de la verdadera... Yo volvería a revisar detenidamente el estudio de Ufotable...`)
    }
    if (command === "300920070225141110020021170492618820751309202010101086139713"){
        message.react('❌')
        message.channel.send(`Esta respuesta está muy cerca de la verdadera... Yo volvería a revisar detenidamente el estudio de Ufotable...`)
    }
    if (command === "secret"){
        message.react('❌')
        message.channel.send(`Este no es el comando secreto...`)
    }
    if (command === "secreto"){
        message.react('❌')
        message.channel.send(`Este no es el comando secreto, secreto, secreto...`)
    }
    if (command === "secretosecretosecreto"){
        message.react('❌')
        message.channel.send(`¿En serio?`)
    }
    if (command === "secreto3"){
        message.react('☑️')
        message.channel.send(`6, clock. 7, foto. 9, mala fortuna`)
    }
    if (command === "aqua"){
        message.react('☑️')
        message.channel.send(`Gran bot, pero no tiene lo que estás buscando`)
    }
    if (command === "asuna"){
        message.react('☑️')
        message.channel.send(`A+A+A= A3`)
    }
    if (command === "as"){
        message.react('☑️')
        message.channel.send(`secreto = A`)
    }

    

})

//////////////////////////////////COMANDOS RECÍPROCOS//////////////////////////////////

client.on('message', message =>{
    let msg = message.content.toLowerCase();
    let args = message.content.substring(prefix.length).split(' ');
    let ki = 'ki!'
    if (msg.startsWith(prefix + 'coin')) {

        let number = Math.floor(Math.random() * 2);
        if (number === 1){
            message.channel.send('Cara')
        }
        if (number === 0){
            message.channel.send('Cruz')
        }
    }        
    if (msg.startsWith(prefix + 'social')) {
        let embed = new Discord.MessageEmbed()
        .setTitle('Redes Sociales')
        .setDescription('Estas son las redes sociales de VictoRuch')
        .setImage('https://cdn.discordapp.com/attachments/737338905485115394/753700338518720552/Screenshot_20200910_200512.jpg')
        .setColor('RANDOM')
        .addField('Youtube', 'VictoRuch', true)
        .addField('Twitch', 'victoruchh', true)
        .addField('Instagram', '@victoruchh', true)
        .addField('Twitter', '@victoruch1', true)
        message.channel.send(embed)


    }
    if (msg.startsWith(prefix + 'rps')) {
        if (!args[1]){
            return message.channel.send('Porfavor, añade tu elección')
        }

        let choices = ['piedra','papel','tijera']
        if (choices.includes(args[1].toLowerCase())) {
            let number = Math.floor(Math.random() * 3)
            if (number == 1){
                return message.channel.send('Ha sido empate, los dos sacamos ' + (args[1]).toLowerCase())

            }   
            if (number == 2){
                if ((args[1]).toLowerCase() == "piedra" ) {
                    return message.channel.send('He ganado, jeje. Saqué **PAPEL**')
                }
                if ((args[1]).toLowerCase() == "papel" ) {
                    return message.channel.send('He ganado, jeje. Saqué **TIJERA**')
                }
                if ((args[1]).toLowerCase() == "tijera" ) {
                    return message.channel.send('He ganado, jeje. Saqué **PIEDRA**')
                }
                
            }
            if (number == 0){
                if ((args[1]).toLowerCase() == "piedra" ) {
                    return message.channel.send('Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **tijera**?')
                }
                if ((args[1]).toLowerCase() == "papel" ) {
                    return message.channel.send('Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **piedra**?')
                }
                if ((args[1]).toLowerCase() == "tijera" ) {
                    return message.channel.send('Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **papel**?')
                }
            }

        } else {
            return message.channel.send('Porfavor, añade algunas de las siguientes opciones: <piedra/papel/tijera>')
        }


    }
    if (msg.startsWith(prefix + '8ball')){
        if (!args[2]){
            return message.channel.send('Porfavor, ¿puedes añadir una pegunta?')

        }
        let number = Math.floor(Math.random() * 9);
        if (number == 0){
            return message.channel.send('Sí, no me cabe la menor duda.')
        }
        if (number == 1){
            return message.channel.send('No creo.')
        }
        if (number == 2){
            return message.channel.send('No se como decirte esto... ehmm. NO.')
        }
        if (number == 3){
            return message.channel.send('Depende de tú ya sabes que.')
        }
        if (number == 4){
            return message.channel.send('Seguramente.')
        }
        if (number == 5){
            return message.channel.send('Vuelve a decir eso y le digo a Kirito que te banee.')
        }
        if (number == 6){
            return message.channel.send('Pregúntalo más tarde.')
        }
        if (number == 7){
            return message.channel.send('No lo tienes nada a tu favor.')
        }
        if (number == 8){
            return message.channel.send('Lo tienes a tu favor.')

        }
    }
    if (msg.startsWith(prefix + 'rate')){
        let number = Math.floor(Math.random() * 101);
        if (!args[1]){
        return message.channel.send('Te daría un **' +number+'** sobre 100')
        } else {
            let user = message.mentions.users.first();
            if (!user){
                return message.channel.send('Porfavor, incluye a quien quieras puntuar')
            }
            return message.channel.send('Le daría a '+user.username+' un ** ' +number+'** sobre 100')
        }
    }
    if (msg.startsWith(prefix + 'kiss')){
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;

        if (!miembro) return message.reply("Menciona a quien quieras besar...");
        let img = message.mentions.users.first();

        if(message.author.id == miembro.id){
            message.react('😐')
            return message.reply('¿Te ibas a besar a tí mismo?')
        
        }
    
        let gif = [
          "https://i.pinimg.com/originals/6e/4f/fe/6e4ffe54a38656cda96ba3eec67c84b4.gif",
          "https://i.pinimg.com/originals/af/72/c6/af72c6957086d85e90b3fb013cc8dbc6.gif",
          "https://i.pinimg.com/originals/d4/dc/09/d4dc09375712a7ed678c9a317f76ad40.gif",
          "https://www.eldictamen.mx/wp-content/uploads/2018/05/b920a74debe339ff75dc5c4abbbeaa1e1df390ab_hq.gif",
          "https://data.whicdn.com/images/336064534/original.gif",
          "https://pa1.narvii.com/6138/a41eab1e8372bc86a7e8ebe0ac009e7cc5120615_00.gif",
          "https://i.pinimg.com/originals/1b/29/37/1b2937a042cbb6ca6039d802e19fe2a7.gif",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F765893480366805180%2F&psig=AOvVaw38hv-dRUJXvwywRUcBmws1&ust=1602234967956000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICG0sTUpOwCFQAAAAAdAAAAABAU",
          "https://www.imagenesdeamor.pro/wp-content/uploads/2015/05/beso-robado-sonrojado.gif",
          "https://i.pinimg.com/originals/04/01/df/0401df1ea3a1e76aafd49042c4f49f7f.gif",
          "https://media1.tenor.com/images/b5c62ff190424e0126af020546d7c36b/tenor.gif?itemid=17026176",
          "https://i.pinimg.com/originals/79/65/2f/79652fcb0b607135dd85573866bb427f.gif",
          "https://steamuserimages-a.akamaihd.net/ugc/159151753790585235/30F9449B09E36F4FADF80175EB892F46E74948D9/",
          "https://media1.tenor.com/images/5d04ae7eea2f16f127348dd44c55317c/tenor.gif?itemid=6007659"
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, ha besado a ${img.username}.`)
          .setColor("RANDOM")
          .setImage(gif[Math.floor(Math.random() * gif.length)]);
    
        message.channel.send(embed);
      }

    if (msg.startsWith(prefix + 'kick')){
        if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission("ADMINISTRATOR")){
            if (!args[1]){
                message.react('❓')
                return message.channel.send('Primero dime a quién vas a expulsar')
            }
            var user = message.mentions.members.first();
            user.kick().then((user)=> {
                message.react('✅')
                message.channel.send('Eso le pasó por hacer cosas malas...')
            }).catch(() => {
                message.channel.send('No he podido expulsarlo... ¡¿Cómo es posible?!')
            })
        }else{
            message.react('🚫')
            return message.channel.send('Oh, no seas malo. Solo los administradores pueden expulsar a otras personas')
            }
    }
    if (msg.startsWith(prefix + 'ban')){
        if (message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission("ADMINISTRATOR")){
            if (!args[1]){
                message.react('❓')
                return message.channel.send('Primero dime a quién vas a banear')
            }
            var user = message.mentions.members.first();
            user.ban().then((user)=> {
                message.react('✅')
                message.channel.send('Su nivel de maldad... ¡era absoluto!')
            }).catch(() => {
                message.channel.send('No he podido banearlo... ¡¿Cómo es posible?!')
            })
        }else{
            message.react('🚫')
            return message.channel.send('De verdad querías banear a otra persona... ¡¿TAN MALO ERES?!')
            }
    }
    if (msg.startsWith(prefix + 'avatar')){
        let user;
    
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else {
          user = message.author;
        }
    
        let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
    
    
        const embed = new Discord.MessageEmbed()
          .setTitle(`${user.tag} avatar`)
          .setColor(0x00ae86)
          .setImage(avatar);
    
        return message.channel.send(embed);
    }

    const { Client, MessageEmbed } = require('discord.js')
    const { Menu } = require('discord.js-menu')
    const client = new Client()

    if (msg.startsWith(prefix + 'help')){
   
        let helpMenu = new Menu(message.channel, message.author.id, [
            
            {
               
                name: 'Help',
              
                content: new MessageEmbed({
                    title: 'as!help',
                    description: 'Te dice los comandos existentes, y te desplazas con las flechitas',
                    color: 'RANDOM',
                    
                
                }),
              
                reactions: {
                    '⏹️': 'delete',
                    '➡️': 'Hi'
                }
            },
            {
                name: 'Hi',
                content: new MessageEmbed({
                    title: 'as!hi',
                    description: '¿Un saludo?',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Help',
                    '⏹️': 'delete', 
                    '➡️': 'Meme'
                    
                }
                
            },
            {
                name: 'Meme',
                content: new MessageEmbed({
                    title: 'as!meme',
                    description: 'Úsalo si quieres que te cuente un meme malo',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Hi',
                    '⏹️': 'delete',
                    '➡️': 'Say'
                }
                
            },
            {
                name: 'Say',
                content: new MessageEmbed({
                    title: 'as!say [Escribe lo que quieras]',
                    description: 'Digo lo que tu dices',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Meme',
                    '⏹️': 'delete' ,
                    '➡️': 'Yt'
                }
                
            },
            {
                name: 'Yt',
                content: new MessageEmbed({
                    title: 'as!yt',
                    description: 'Canal de YouTube de Victoruch',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Say',
                    '⏹️': 'delete',
                    '➡️': 'Twitch'
                }
                
            },
            {
                name: 'Twitch',
                content: new MessageEmbed({
                    title: 'as!twitch',
                    description: 'Canal de Twitch de VictoRuch',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'YT',
                    '⏹️': 'delete', 
                    '➡️': 'Normas'
                }
                
            },
            {
                name: 'Normas',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!normas',
                    description: 'Las reglas son las reglas',
                }),
                reactions: {
                    '⬅️': 'YT',
                    '⏹️': 'delete',
                    '➡️': '782'
                
                }
                
            },
            {
                name: '782',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!782',
                    description: 'Despacio',
                }),
                reactions: {
                    '⬅️': 'Normas',
                    '⏹️': 'delete' ,
                    '➡️': '8ball'
                }
                
            },
            {
                name: '8ball',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!8ball',
                    description: 'Pregúntame algo',
                }),
                reactions: {
                    '⬅️': '782',
                    '⏹️': 'delete',
                    '➡️': 'Coin'
                }
                
            },
            {
                name: 'Coin',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!coin',
                    description: 'Cara o cruz',
                }),
                reactions: {
                    '⬅️': '8ball',
                    '⏹️': 'delete',
                    '➡️': 'Rate'
                }
                
            },
            {
                name: 'Rate',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!rate / as!rate (mención)',
                    description: 'Te puntúo del 0 al 100',
                }),
                reactions: {
                    '⬅️': 'Coin',
                    '⏹️': 'delete',
                    '➡️': 'RPS'
                }
                
            },
            {
                name: 'RPS',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!rps',
                    description: 'Piedra, papel o tijera',
                }),
                reactions: {
                    '⬅️': 'Rate',
                    '⏹️': 'delete', 
                    '➡️': 'Social'
                }
                
            },
            {
                name: 'Social',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!social',
                    description: 'Mira las redes sociales de VictoRuch',
                }),
                reactions: {
                    '⬅️': 'RPS',
                    '⏹️': 'delete', 
                    '➡️': 'Kiss'
                }
                
            },
            {
                name: 'Kiss',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!kiss [menciona a un usuario]',
                    description: 'Dale un beso a un usario',
                }),
                reactions: {
                    '⬅️': 'Social',
                    '⏹️': 'delete', 
                    '➡️': 'Kill'
                }
                
            },
            {
                name: 'Kill',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!kill [menciona a un usuario]',
                    description: 'N-no te voy a decir que es... no lo hagas',
                }),
                reactions: {
                    '⬅️': 'Kiss',
                    '⏹️': 'delete', 
                    '➡️': 'Avatar'
                }
                
            },
            {
                name: 'Avatar',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'as!avatar/ as!avatar [menciona a un usuario]',
                    description: 'Mira los avatares de los usuarios, o el tuyo propio',
                }),
                reactions: {
                    '⬅️': 'Kill',
                    '⏹️': 'delete', 
                }
                
            },
            
         
        ], 300000)
   
        helpMenu.start()
    }

    if (msg.startsWith(prefix + 'kill')){
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;

        const owo = new Discord.MessageEmbed()
        .setTitle(`Intento de suicidio por parte de ${message.author.username}`)
        .setColor("RANDOM")
        .setImage('https://i.imgur.com/zg0MOMI.gif')
        .setDescription('No lo hagas, esa no es la salida...')
        
        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres matar?!");
        
        if(message.author.id == miembro.id) return message.reply(owo)
        
        let img = message.mentions.users.first();
    
        let gif = [
          "https://cdn.discordapp.com/attachments/399448944889036801/719693759797002250/Kill.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/651506952152809482/c8279fec-8b6e-43e3-aa98-d81938252061.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/655839366370951172/b61b4ce0b0f53b2d1e57841dd7b896ab.gif",
          "https://media.giphy.com/media/20KSmo8aJ7HYu5L0rf/giphy.gif",
          "https://cdn.discordapp.com/attachments/604911557276729366/632373542255853587/k2.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/656904820304904195/7419e422-836a-4c39-a913-662c1544e609.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/734832331965071580/lwmkG86.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/568088711263420428/unnamed_5.gif",
          "https://cdn.discordapp.com/attachments/604911557276729366/632372902037028864/descarga.gif",
          "https://cdn.discordapp.com/attachments/604911557276729366/632372902037028864/descarga.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/608645883487322112/kill.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/609821384859713606/kill6.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/655839363623813150/947bf5ae08f8d48d6eec17dd8324b59f.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/608652401221828638/kill.gif",
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, ha acabado con ${img.username}.`)
          .setColor("RANDOM")
          .setImage(gif[Math.floor(Math.random() * gif.length)]);
    
        message.channel.send(embed);
    }
    
    if (msg.startsWith(prefix + '8881120588811205')){
   
        let helpMenu = new Menu(message.channel, message.author.id, [
            
            {
               
                name: 'Help',
              
                content: new MessageEmbed({
                    title: '¿Darling in the FranXX?',
                    description: 'El primer número que se me viene a la cabeza es... ¿Zero Two?',
                    color: 'RANDOM',
                    
                
                }),
              
                reactions: {
                    '⏹️': 'delete',
                    '➡️': 'Hi'
                }
            },
            {
                name: 'Hi',
                content: new MessageEmbed({
                    title: 'Novelas ligeras de SAO.',
                    description: 'Cuenta las novelas ligeras que tiene SAO... ¡25!',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Help',
                    '⏹️': 'delete', 
                    '➡️': 'Meme'
                    
                }
                
            },
            {
                name: 'Meme',
                content: new MessageEmbed({
                    title: 'Evangelion: Asuka.',
                    description: '14. La edad de Asuka.',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Hi',
                    '⏹️': 'delete',
                    '➡️': 'Say'
                }
                
            },
            {
                name: 'Say',
                content: new MessageEmbed({
                    title: 'Administradora: Yui',
                    description: 'Yui (Sword Art Online) salió por primera vez en el capítulo número 11 del anime. ',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Meme',
                    '⏹️': 'delete' ,
                    '➡️': 'Yt'
                }
                
            },
            {
                name: 'Yt',
                content: new MessageEmbed({
                    title: '¿Cuántas letras tiene tu nombre?',
                    description: 'Tu nombre... **Kimi no na wa**... en realidad tiene 10 letras',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Say',
                    '⏹️': 'delete',
                    '➡️': 'Twitch'
                }
                
            },
            {
                name: 'Twitch',
                content: new MessageEmbed({
                    title: 'Kono Yo no Hate...0112',
                    description: 'Vete al capítulo 3 de Kono Yo No Hate, en el minuto 01:12 tienes un reloj que marca las 22:00/10:00, dale la vuelta de forma horizontal a la manecilla de los minutos y dime que te marca... o sí, un ¡2!',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'YT',
                    '⏹️': 'delete', 
                    '➡️': 'Normas'
                }
                
            },
            {
                name: 'Normas',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'La princesa de la Luna, en su segunda versión, los dos primeros números sobre la segunda persona...',
                    description: 'Capítulo número 12 de la segunda temporada de Kaguya-sama. Cuando Kaguya mira su móvil y vé una foto de ella con Miko. Encima de ellas marca la hora... las ¡21!',
                }),
                reactions: {
                    '⬅️': 'YT',
                    '⏹️': 'delete',
                    '➡️': '782'
                
                }
                
            },
            {
                name: '782',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'El mundo se acabará pronto. El mundo se acabará pronto. El mundo se acabará pronto.',
                    description: 'Lo he repetido 3 veces... no es coincidencia. El capítulo 3 de Kamisama Ni Natta Hi marca que quedan **17** días...',
                }),
                reactions: {
                    '⬅️': 'Normas',
                    '⏹️': 'delete' ,
                    '➡️': '8ball'
                }
                
            },
            {
                name: '8ball',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: '**SHINE**',
                    description: 'El Shine, significa muerte en japonés (o más bien morir). Eso da mala suerte, al igual que el número 4. **04**',
                }),
                reactions: {
                    '⬅️': '782',
                    '⏹️': 'delete',
                    '➡️': 'Coin'
                }
                
            },
            {
                name: 'Coin',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: '¿Amas la vida? Yo amo Los Alpes suizos... las mejores medidas de todas.',
                    description: 'Love Live no significa "Amar la vida", pero se sobreentiende que eso es. Emma Verde es la única suiza del anime, y sus medidad son la respuesta: "92 61 88"',
                }),
                reactions: {
                    '⬅️': '8ball',
                    '⏹️': 'delete',
                    '➡️': 'Rate'
                }
                
            },
            {
                name: 'Rate',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'La primera de muchas muertes, sujetó su mano. Poco importaban ya los segundos...',
                    description: 'Cuando Subaru muere en el capítulo 1, agarra la mano de Emilia. Los segundos no importan, y el minuto era el **20**, así que esa es la respuesta',
                }),
                reactions: {
                    '⬅️': 'Coin',
                    '⏹️': 'delete',
                    '➡️': 'RPS'
                }
                
            },
            {
                name: 'RPS',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: '¿El final de SAO?',
                    description: 'El último piso que se pasan en Aincrad es el **75**, fácil.',
                }),
                reactions: {
                    '⬅️': 'Rate',
                    '⏹️': 'delete', 
                    '➡️': 'Social'
                }
                
            },
            {
                name: 'Social',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Tiburón',
                    description: 'Gawr Gura. Su debut fué el 13 de Septiembre de 2020. 13092020',
                }),
                reactions: {
                    '⬅️': 'RPS',
                    '⏹️': 'delete', 
                    '➡️': 'Kiss'
                }
                
            },
            {
                name: 'Kiss',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Trío. Las poses más raras, las apuestas más arriesgadas.',
                    description: 'Poses... JoJo. Temporada 3 capítulo 35, trío de 10. **101010**',
                }),
                reactions: {
                    '⬅️': 'Social',
                    '⏹️': 'delete', 
                    '➡️': 'Kill'
                }
                
            },
            {
                name: 'Kill',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Vivo en la realidad pero cuando quiero vivo en otro mundo.',
                    description: 'Se refiere a Chuunibyou. Síndrome de Octavo Grado: **8**',
                }),
                reactions: {
                    '⬅️': 'Kiss',
                    '⏹️': 'delete', 
                    '➡️': 'Avatar'
                }
                
            },
            {
                name: 'Avatar',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: '¿El final es el comienzo, y el comienzo es el final, encontrará a la de sus recuerdos? ¿Cuántos son?',
                    description: '¿Un anime en el que el comienzo del anime sea igual al del final? Efectivamente, Gotoubun no Hanayome. Encontrará a la de sus recuerdos se refiere a Futaro. En total ellos son **6**. ',
                }),
                reactions: {
                    '⬅️': 'Kill',
                    '⏹️': 'delete', 
                    '➡️': '0'
                }
                
            },
            {
                name: '0',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Vivo en la realidad pero cuando quiero vivo en otro mundo.',
                    description: 'Se refiere a Chuunibyou. Síndrome de Octavo Grado: **8**',
                }),
                reactions: {
                    '⬅️': 'Avatar',
                    '⏹️': 'delete', 
                    '➡️': '1'
                }
                
            },
            {
                name: '1',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Monster. Monster. Monster. Monster... Una maldición.',
                    description: 'Monster, Monster, Monster, Monster es la última frase del OP 6 de Shingeki No Kyojin. La maldición es la maldición de los 13 años de los herederos de los titanes.',
                }),
                reactions: {
                    '⬅️': '0',
                    '⏹️': 'delete', 
                    '➡️': '2'
                }
                
            },
            {
                name: '2',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Las mentiras están prohibidas. Los **triángulos** no...',
                    description: 'Koi To Uso tiene un porcentaje de Triángulo Romántico del **97**%.',
                }),
                reactions: {
                    '⬅️': '1',
                    '⏹️': 'delete', 
                    '➡️': '3'
                }
                
            },
            {
                name: '3',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Bienvenido a la que pueda ser la pregunta más difícil del juego. Haz lo que quieras con esto: 35°42′27″N 139°39′50″E',
                    description: '¡Venga ya! Nunca le diré esta respuesta a nadie. No puedes ganar el juego sin hacer nada. Simplemente haz algo y sácalo. ',
                }),
                reactions: {
                    '⬅️': '2',
                    '⏹️': 'delete', 
                }
                
            }
            
            
            
         
        ], 300000)
   
        helpMenu.start()
    }
    if (msg.startsWith(prefix + 'sip')){

        let ocha = [
            "https://cdn.nekotina.com/images/zLpIge9B.gif",
            "https://cdn.nekotina.com/images/0EZj7-D6.gif",
            "https://cdn.nekotina.com/images/REYo622k.gif",
            "https://cdn.nekotina.com/images/4bNMbFpx.gif",
            "https://cdn.nekotina.com/images/mR0IBqmEN.gif",
            "https://cdn.nekotina.com/images/rRNqKGBj.gif",
            "https://cdn.nekotina.com/images/q0lit7dNW.gif",
            "https://tenor.com/view/kirito-gif-10830229",
            "https://cdn.nekotina.com/images/G82qdfSk.gif",
            "https://cdn.nekotina.com/images/Z5mnlvB0.gif",
            "https://cdn.nekotina.com/images/AZ6QbCs3.gif",
            "https://cdn.nekotina.com/images/ynwUIDPe.gif",
            "https://imgur.com/4nsF3N8",
            "https://cdn.nekotina.com/images/uxtGkrVKv.gif",
        ];

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} está tomando ocha.`)
        .setColor("RANDOM")
        .setImage(ocha[Math.floor(Math.random() * ocha.length)])
        

        return message.channel.send(embed) 
    }
    if (msg.startsWith(prefix + 'sleep')){

        let mimir = [
            "https://images-ext-2.discordapp.net/external/A8Av7EE4Ms0SSEoztzOQuq_ilWZOv3coBC9xM3lgcYc/https/imgur.com/eZMfVUq.gif.gif",
            "https://cdn.discordapp.com/attachments/744704938424270953/797184780550668369/s1c.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185119412420608/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185232931520532/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185419645026324/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185527442833428/s1.gif",
            "https://discord.com/channels/@me/744704938424270953/797183497412411393",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185805294632970/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185946994343936/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797186118566674452/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797186272863059968/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797186413443022873/s1.gif",
        
        ];

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} está durmiendo profundamente.`)
        .setColor("RANDOM")
        .setImage(mimir[Math.floor(Math.random() * mimir.length)])
        

        return message.channel.send(embed) 
    }
    if (msg.startsWith(prefix + 'slap')){
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;

        const awa = new Discord.MessageEmbed()
        .setTitle(`¡No te pegues! ${message.author.username}`)
        .setColor("RANDOM")
        .setImage('https://i.imgur.com/E8C6yNI.gif')
        .setDescription('No te irás a pegar a ti mismo...¿no?')

       
    
        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres pegar?!");
        let img = message.mentions.users.first();
        
        if(message.author.id == miembro.id) return message.reply(awa)
        let slap = [
          "https://cdn.discordapp.com/attachments/735980466582323353/797188400447881266/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797188573823893504/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797188801792442408/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797188983120723978/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189162549641226/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189339121451038/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189492284325938/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189617375379546/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189876059340851/s1.gif",
         
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, le ha dado una bofetada a ${img.username}.`)
          .setColor("RANDOM")
          .setImage(slap[Math.floor(Math.random() * slap.length)]);
    
        message.channel.send(embed);
    }
    if (msg.startsWith(prefix + 'pat')){
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;

        const iwi = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} se ha acariciado a si mismo.`)
        .setColor("RANDOM")
        .setImage('https://pa1.narvii.com/6345/1afca296924552f201983742f98d310e2054839b_hq.gif')
        .setDescription('¿Tan solo te sientes?')

       
    
        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres darle amor?!");
        let img = message.mentions.users.first();
        
        if(message.author.id == miembro.id) return message.reply(iwi)
        let pat = [
          "https://cdn.discordapp.com/attachments/735980466582323353/797195143563706398/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797195402520428566/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797195656392605696/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797195861758836756/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797196029652500541/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797196169150201876/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797196495454732288/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797196627664175165/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797197093516345404/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797197371548368896/s1.gif",
          "https://cdn.discordapp.com/attachments/746179353829703691/797197376343375872/pat_1.gif",
          "https://cdn.discordapp.com/attachments/746179353829703691/797197557452243025/pat_2.gif",
         
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, le ha dado amor a ${img.username}.`)
          .setColor("RANDOM")
          .setImage(pat[Math.floor(Math.random() * pat.length)]);
    
        message.channel.send(embed);
    }
    if (msg.startsWith(prefix + 'bn')) {
        
        let medida = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "100",


        ]
        const tula = new Discord.MessageEmbed()
        .setTitle(`Tu banana mide ${medida[Math.floor(Math.random() * medida.length)]} centímetros`)
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/746179353829703691/797205740284542976/dibujos-animados-bananas-bailando_53734-29.png")



        message.channel.send(tula)


    }  
    if (msg.startsWith(prefix + 'shoot')){
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;
        message.delete().catch()
  
        const iwi = new Discord.MessageEmbed()
        .setTitle(`¡${message.author.username}! No te puedes disparar a tí mismo.`)
        .setColor("RANDOM")
        .setImage('https://cdn.discordapp.com/attachments/751963091948011550/799658371141730335/unknown.png')
        .setDescription('¿Realmente pensabas hacerlo?')
  
       
    
        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres matar?!");
        let img = message.mentions.users.first();
        
        if(message.author.id == miembro.id) return message.reply(iwi)
        let pat = [
          "https://cdn.discordapp.com/attachments/751963091948011550/799655183336079401/74761df0b2dd97c3cfd364e71d0af021.gif",
          "https://cdn.discordapp.com/attachments/751963091948011550/799655211438309376/tumblr_n92tdbLW1p1qm5nqro2_500.gif",
          "https://cdn.discordapp.com/attachments/751963091948011550/799655252319535104/Tridente_1.gif",
          "https://cdn.discordapp.com/attachments/751963091948011550/799655372431556650/Decomposition-under-Cast-Jamming-AN-Ep07.gif",
          "https://cdn.discordapp.com/attachments/751963091948011550/799655406908866621/tumblr_ncktr1b23V1qa94xto1_500.gif",
          "https://cdn.nekotina.com/images/jDc8cpL0.gif",
          "https://cdn.nekotina.com/images/omXX6jH9.gif",
          "https://cdn.nekotina.com/images/Soq0jq9k.gif",
          "https://cdn.nekotina.com/images/2SUyXzZU.gif",
          "https://cdn.nekotina.com/images/AvRT2f80.gif",
          "https://cdn.nekotina.com/images/5_WgtqZD.gif",
          "https://cdn.nekotina.com/images/n7drP0_2.gif",
         
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username} a disparado a ${img.username}.`)
          .setColor("RANDOM")
          .setImage(pat[Math.floor(Math.random() * pat.length)]);
    
        message.channel.send(embed);
    } 
    if (msg.startsWith(prefix + 'revive')){
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;
        message.delete().catch()
  
        const iwi = new Discord.MessageEmbed()
        .setTitle(`¡${message.author.username}! Se está reviviendo a sí mismo.`)
        .setColor("RANDOM")
        .setImage('https://cdn.discordapp.com/attachments/751963091948011550/799658371141730335/unknown.png')
        .setDescription('¿Eso era siquiera posible?')
  
       
    
        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres matar?!");
        let img = message.mentions.users.first();
        
        if(message.author.id == miembro.id) return message.reply(iwi)
        let pat = [
          "https://cdn.discordapp.com/attachments/541402053998673950/606206277433032704/tenor_1.gif",
          "https://imgur.com/6XuuPCi.gif",
          "https://cdn.discordapp.com/attachments/541402053998673950/606206173808427030/original_1.gif",
          "https://cdn.discordapp.com/attachments/541402053998673950/606206189872742474/tumblr_inline_ot3heqGyju1uvbeib_540.gif",
          "https://cdn.discordapp.com/attachments/541402053998673950/606206217748217926/ec87d55c8a58fae220eb62a37da4c6259ef894ef_00.gif",
          "https://cdn.discordapp.com/attachments/541402053998673950/606206291949649950/2rx3lgo1bpj01.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/673021422276313099/f7f8c213-cc68-4815-965a-1eebb1c0480c.gif",
          "https://cdn.discordapp.com/attachments/541402053998673950/606206149905350686/tumblr_mwq2uu7KzD1rnm2nso3_250.gif",
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`¡${message.author.username} está reviviendo a  ${img.username}!`)
          .setColor("RANDOM")
          .setImage(pat[Math.floor(Math.random() * pat.length)]);
    
        message.channel.send(embed);
    }
    if (msg.startsWith(prefix + 'kurumi')) {
        const kurumi = new Discord.MessageEmbed()
        .setTitle('Ara Ara, Vesk-San')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/800118054247071744/b60519f441412bedbe5fb16999e30335.gif')
        .setColor('ff0000')

        message.channel.send(kurumi)
    }
    if (msg.startsWith(prefix + 'tanjirou')) {
        const tanjirou = new Discord.MessageEmbed()
        .setTitle('Salvemos y protegamos al mundo de todos los demonios.')
        .setImage('https://cdn.discordapp.com/attachments/735980466582323353/800133082324926515/tanjirou.gif')
        .setColor('00aae4')

        message.channel.send(tanjirou)
    }
    if (msg.startsWith(prefix + 'kanna')) {
        const kanna = new Discord.MessageEmbed()
        .setTitle('Lo que veo me lo como :yum: (#Slow)')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/800124963049701416/Kanna-Kamui.gif')
        .setColor('fc67d2')

        message.channel.send(kanna)
    }
    if (msg.startsWith(ki + 'kirito')) {
        
        const kirito = new Discord.MessageEmbed()
        .setTitle('Enhance Armament')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/800137748836909116/1bd1da4ade6de2280b17c7b14d0fb6cd.gif')
        .setColor('000000')

        message.channel.send(kirito)
    }
})

/////////////////////////////XP///////////////////////////////



const levels = require('discord-xp')
levels.setURL("mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data")

client.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

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
    
    //Rank
    if(command === "rank") {
        const user = await levels.fetch(message.author.id, message.guild.id);
        const embed = new Discord.MessageEmbed()
        .setColor("00ff2e")
        .setTitle("Nivel")
        .setDescription(`Eres nivel ${user.level}!`)
        message.channel.send(embed);

    }
    
    //Leaderboard
    if(command === "top" || command === "lb") {
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
})

/////////////////////////BIENVENIDA/////////////////////////

client.on('guildMemberAdd', (member) => {
    let channelID = "784089457594073139";
    if(member.guild.id != "774990356206059550") return;
  
    let embed = new Discord.MessageEmbed()
    .setTitle(`**¡Nuevo miembro!**`)
    .setDescription(`¡**${member.user.tag}** se ha unido al servidor! 🎌 Ohayou Gozaimasu 🎌 `)
    .setColor("ff0053")
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})



