require('dotenv').config()
var Discord = require('discord.js'),
    client = new Discord.Client({
        partials: ['MESSAGE']
    })
    //m3o = require('@m3o/m3o-node'), 

client.login(process.env.DISCORD_BOT_TOKEN)

client.on('ready', () => {
    if (process.env.IS_PROD === 'true') {
        // TODO
    } else { 
        console.clear()
        console.log('Ready 🤖')
    }
})

client.on('message', msg => {
    if (msg.content.charAt(0) === process.env.PREFIX_CHAR) {
        var message_content = msg.content.replace(process.env.PREFIX_CHAR, '').split(' '), 
            message_channel = msg.channel

        switch(message_content[0]) {
            case 'source':
                message_channel.send('<https://github.com/xmagee/disco>')
                break
            // case 'roll':
            //     var dice_to_toss = new Array(parseInt(message_content[1]))
            //         dice_tossed = 0, 
            //         roll_results = new Array(dice_to_toss)

            //     while (dice_tossed < dice_to_toss) {
            //         roll_results[dice_tossed] = `🎲 ${Math.floor(Math.random() * (6 - 1) + 1)}`
            //         dice_tossed += 1
            //     }
            //     message_channel.send('ok')
            //     break
            default: 
                break
        }
    }
})