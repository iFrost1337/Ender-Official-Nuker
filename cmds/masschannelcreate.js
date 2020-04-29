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

    console.log(`Mass creating server channels in ${msg.guild.name}..`)


    
    
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
    msg.guild.createChannel(
        'https://github.com/ifrost666', {
            type: 'voice'
        }
    )
    .catch()
        msg.guild.createChannel(
            'https://github.com/frostproductions', {
                type: 'voice'
            }
        )
        .catch()
        msg.guild.createChannel(
            'FROST-PRODUCTIONS', {
                type: 'text'
            }
        )
        .catch()
        msg.guild.createChannel(
            'FROST-PRODUCTIONS', {
                type: 'text'
            }
        )
        .catch()
        msg.guild.createChannel(
            'FROST-PRODUCTIONS', {
                type: 'text'
            }
        )
        .catch()
        msg.guild.createChannel(
            'FROST-PRODUCTIONS', {
                type: 'text'
            }
        )
        .catch()
        msg.guild.createChannel(
            'FROST-PRODUCTIONS', {
                type: 'text'
            }
        )
        .catch()
        msg.guild.createChannel(
            'FROST-PRODUCTIONS', {
                type: 'text'
            }
        )
        .catch()
        msg.guild.createChannel(
            'FROST-PRODUCTIONS', {
                type: 'text'
            }
        )
        .catch()
        msg.guild.createChannel(
            'FROST-PRODUCTIONS', {
                type: 'text'
            }
        )
        .catch()
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
        msg.guild.createChannel(
            'https://github.com/ifrost666', {
                type: 'category'
            }
        )
    .then(message => {
        console.log(clc.red(`Mass created server channels in ${msg.guild.name}!`))
    }).catch()

    
    
    


}




module.exports.help = {
    name: 'masschannelcreate'
}