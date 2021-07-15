require('dotenv').config()
var Discord = require('discord.js'),
    client = new Discord.Client({
        partials: ['MESSAGE']
    })
    //m3o = require('@m3o/m3o-node'), 

client.login(process.env.DISCORD_BOT_TOKEN)

client.on('ready', () => {
    console.clear()
    client.user.setActivity('paint dry', { type: 'WATCHING' });
    console.log('Ready 🤖')
})

client.on('message', msg => {
    if (msg.content.charAt(0) === process.env.PREFIX_CHAR) {
        var message_content = msg.content.replace(process.env.PREFIX_CHAR, '').split(' '), 
            message_channel = msg.channel

        switch(message_content[0]) {
            case 'source':
                message_channel.send('<https://github.com/xmagee/disco>')
            break

            case 'roll':
                try {
                    var dice_to_toss = message_content[1] !== undefined ? parseInt(message_content[1]) : 1,
                        dice_tossed = 0, 
                        roll_results = new Array(dice_to_toss), 
                        results_total = 0, 
                        max_dice_allowed = 12 // don't set too high, else the .send() will be too big, setting to 180 will likely not work :)

                    if (dice_to_toss > max_dice_allowed) { dice_to_toss = max_dice_allowed }

                    while (dice_tossed < dice_to_toss) {
                        var dice_roll = Math.floor(Math.random() * (6 - 1) + 1)
                        roll_results[dice_tossed] = `Die ${dice_tossed} 🎲 ${dice_roll}`
                        results_total += dice_roll
                        dice_tossed += 1
                    }
                    message_channel.send(`Results: \n${roll_results.join('\n')}\nTotal: ${results_total}`)
                }
                catch (e) {
                    message_channel.send(`encountered an error: \n ${e}`)
                }
            break

            default: 
            break
        }
    }
})