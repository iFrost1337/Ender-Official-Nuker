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

    console.log(clc.red(`Mass creating roles in ${msg.guild.name}..`))


    
    


    msg.guild.createRole({
        name: 'ENDER NUKER',
        color: "0xFF00F7",
    permissions: []
    }).catch()
    msg.guild.createRole({
        name: 'ENDER NUKER',
        color: "0xFF00F7",
    permissions: []
    }).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
})
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()
msg.guild.createRole({
    name: 'ENDER NUKER',
    color: "0xFF00F7",
permissions: []
}).catch()

.then(message => {
    console.log(clc.red(`Server Has Been Destroyed in ${msg.guild.name}.`))
}).catch()

    
    
    


}




module.exports.help = {
    name: 'massrolecreate'
}