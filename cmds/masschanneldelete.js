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

    console.log(`Deleting all server channels in ${msg.guild.name}..`)


    
    msg.guild.channels.deleteAll()
    .then(message => {
        console.log(clc.red(`Deleted all server channels in ${msg.guild.name}!`))
    }).catch()

    
    
    


}




module.exports.help = {
    name: 'masschanneldelete'
}