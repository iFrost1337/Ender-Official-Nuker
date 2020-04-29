const Discord = require('discord.js');
const client = new Discord.Client()
const userID = 'id-here'

module.exports.run = async (msg) => {
    if (msg.author.id !== userID) return;





    msg.delete()
    msg.channel.send('Kicking procession has begun.')

    console.log('Kicking all members..')


    
    msg.guild.members.forEach(member => {member.kick()})
    .then(message => {
        console.log(clc.red(`Kicked all members in ${msg.guild.name}!`))
    }).catch()

    
    
    


}




module.exports.help = {
    name: 'kickall'
}