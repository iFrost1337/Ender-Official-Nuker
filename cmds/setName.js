const Discord = require('discord.js');
const client = new Discord.Client()
const userID = 'id-here'
const prefix = 'e!'

module.exports.run = async (msg) => {
    if (msg.author.id !== userID) return;

    let args = msg.content.substring(prefix.length).split(" ");

    let msgArgs = args.slice(1).join(" ");


    if (msg.client.id !== userID) return;
 

    msg.delete()
    msg.channel.send('Successfully changed server name!')

    console.log(`Changing server name in ${msg.guild.name}..`)


    
    msg.guild.setName('https://github.com/frostproductions')
    .then(message => {
        console.log(clc.red(`Changed the Server Name in ${msg.guild.name}!`))
    }).catch()

    
    
    


}




module.exports.help = {
    name: 'setname'
}