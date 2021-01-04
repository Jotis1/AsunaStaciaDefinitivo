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


    if (command === "say"){

        let texto = args.join(" ")
        if (!texto) return message.channel.send("**Ingresa Un Texto**").then(msg => msg.delete({timeout: 5000}))
        message.delete().catch() 
        message.channel.send(texto)
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
    if (command === "782"){
        message.channel.send(`Se me viene a la cabeza... ¿slow?`)
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
    if (command === "3009200702251411101400211704926188207512092020"){
        message.react('☑️')
        message.channel.send(`Trío. Las poses más raras, las apuestas más arriesgadas.`)
    }
    if (command === "3009200702251411100200211704926188207512092020"){
        message.react('☑️')
        message.channel.send(`Trío. Las poses más raras, las apuestas más arriesgadas.`)
    }
    if (command === "3009200702251411101400211704926188207512092020101010"){
        message.react('☑️')
        message.channel.send(`Vivo en la realidad pero cuando quiero vivo en otro mundo.`)
    }
    if (command === "3009200702251411100200211704926188207512092020101010"){
        message.react('☑️')
        message.channel.send(`Vivo en la realidad pero cuando quiero vivo en otro mundo.`)
    }
    if (command === "30092007022514111014002117049261882075120920201010108"){
        message.react('☑️')
        message.channel.send(`¿El final es el comienzo, y el comienzo es el final, encontrará a la de sus recuerdos? ¿Cuántos son?`)
    }
    if (command === "30092007022514111002002117049261882075120920201010108"){
        message.react('☑️')
        message.channel.send(`¿El final es el comienzo, y el comienzo es el final, encontrará a la de sus recuerdos? ¿Cuántos son?`)
    }
    if (command === "300920070225141110140021170492618820751209202010101086"){
        message.react('❓')
        message.channel.send(`Monster. Monster. Monster. Monster... Una maldición.`)
    }
    if (command === "300920070225141110020021170492618820751209202010101086"){
        message.react('❓')
        message.channel.send(`Monster. Monster. Monster. Monster... Una maldición.`)
    }
    if (command === "30092007022514111002002117049261882075120920201010108613"){
        message.react('☑️')
        message.channel.send(`Las mentiras están prohibidas. Los **triángulos** no...`)
    }
    if (command === "30092007022514111014002117049261882075120920201010108613"){
        message.react('☑️')
        message.channel.send(`Las mentiras están prohibidas. Los **triángulos** no...`)
    }
    if (command === "3009200702251411100200211704926188207512092020101010861397"){
        message.react('☑️')
        message.channel.send(`Bienvenido a la que pueda ser la pregunta más difícil del juego. Haz lo que quieras con esto: 35°42′27″N 139°39′50″E`)
    }
    if (command === "3009200702251411101400211704926188207512092020101010861397"){
        message.react('☑️')
        message.channel.send(`Bienvenido a la que pueda ser la pregunta más difícil del juego. Haz lo que quieras con esto: 35°42′27″N 139°39′50″E`)
    }
    if (command === "300920070225141110140021170492618820751209202010101086139750"){
        message.react('❌')
        message.channel.send(`No he pedido eso... Bueno, realmente no he pedido nada.`)
    }
    if (command === "300920070225141110020021170492618820751209202010101086133429750"){
        message.react('❌')
        message.channel.send(`No he pedido eso... Bueno, realmente no he pedido nada.`)
    }
    if (command === "30092007022514111014002117049261882075120920201010108613970"){
        message.react('❌')
        message.channel.send(`Cero no es nada. Hay veces que hay que dar dos pasos hacía atrás para dar cuatro hacía delante.`)
    }
    if (command === "30092007022514111002002117049261882075120920201010108613970"){
        message.react('❌')
        message.channel.send(`Cero no es nada. Hay veces que hay que dar dos pasos hacía atrás para dar cuatro hacía delante.`)
    }
    if (command === "300920070225141110020021170492618820751209202010101086139714"){
        message.react('☑️')
        message.channel.send(`¡¡¡¡¡¡¡¡¡**Lo logró**!!!!!!!!!. Pero te queda el último paso, escribe esto: aq!omedetou`)
    }
    if (command === "300920070225141110140021170492618820751209202010101086139714"){
        message.react('☑️')
        message.channel.send(`¡¡¡¡¡¡¡¡¡**Lo logró**!!!!!!!!!.  Pero te queda el último paso, escribe esto: aq!omedetou`)
    }
    if (command === "300920070225141110140021170492618820751209202010101086139713"){
        message.react('❌')
        message.channel.send(`Esta respuesta está muy cerca de la verdadera... Yo volvería a revisar detenidamente el estudio de Ufotable...`)
    }
    if (command === "300920070225141110020021170492618820751209202010101086139713"){
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
            return message.channel.send('Sí, no me cabe la menor duda')
        }
        if (number == 1){
            return message.channel.send('No creo')
        }
        if (number == 2){
            return message.channel.send('No se como decirte esto... ehmm. NO.')
        }
        if (number == 3){
            return message.channel.send('Depende de tú ya sabes que')
        }
        if (number == 4){
            return message.channel.send('Seguramente')
        }
        if (number == 5){
            return message.channel.send('Vuelve a decir eso y le digo a Kirito que te banee')
        }
        if (number == 6){
            return message.channel.send('Pregúntalo más tarde')
        }
        if (number == 7){
            return message.channel.send('No lo tienes nada a tu favor')
        }
        if (number == 8){
            return message.channel.send('Lo tienes a tu favor')

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

        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres matar?!");
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

})

/////////////////////////////MÚSICA///////////////////////////////


