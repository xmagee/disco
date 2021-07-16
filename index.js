require('dotenv').config()
var Discord = require('discord.js'),
    client = new Discord.Client({
        partials: ['MESSAGE']
    }), 
    axios = require('axios')

client.login(process.env.DISCORD_BOT_TOKEN)

client.on('ready', () => {
    console.clear()
    client.user.setActivity('paint dry', { type: 'WATCHING' });
    console.log('Ready 🤖')
})

client.on('message', msg => {
    if (msg.content.charAt(0) === process.env.PREFIX_CHAR) {
        var message = msg, 
            message_content = message.content.replace(process.env.PREFIX_CHAR, '').split(' '), 
            message_channel = message.channel

        switch(message_content[0]) {
            case 'source':
                message.reply('<https://github.com/xmagee/disco>')
            break

            case 'help': 
                message_content.shift()
                if (message_content.length === 0) {
                    message.reply(`**Available commands:**
- !source 
- !help
- !q
- !roll
- !clear
**For help on a specific command, send: \`!help [command_name_here]\`**`)
                } else { 
                    switch (message_content[0]) {
                        case 'source':
                            message.reply(`**Command 'source':**
**Args:** n/a
**Functionaliy:** prints url of this bot's source code
**Example:** \`!source\``)
                        break
                        
                        case 'help':
                            message.reply(`**Command: 'help':**
**Args:** n/a, or the name of an available command
**Functionaliy:** shows help command, or prints help for specific command
**Examples:** \`!help\` or \`!help roll\``)
                        break

                        case 'q':
                            message.reply(`**Command 'q':**
**Args:** a search query
**Functionality:** prints results of a search query
**Example:** \`!q system of a down\``)
                        break

                        case 'roll':
                            message.reply(`**Command 'roll':**
**Args:** n/a, or number of dice to roll
**Functionality:** rolls die/dice, prints result(s)
**Examples:** \`!roll\` or \`!roll 3\``)
                        break

                        case 'clear':
                            message.reply(`**Command 'clear':**
**Args:** n/a
**Functionality:** clears the screen
**Example:** \`!clear\``)
                        break

                        default: //TODO: 'did you mean... ?'
                            message.reply(`No command available that matches '${message_content[0]}'.`)
                        break
                    }
                }
            break

            case 'q':
                message_content.shift()
                var search_query = message_content.join(' ')
                if (search_query !== undefined) {
                    axios.get(`https://api.duckduckgo.com/?format=json&q=${search_query}`)
                        .then(r => {
                            if (r.status === 200 && r.data.Abstract !== '') {
                                message_channel.send(`From ${r.data.AbstractSource} - <${r.data.AbstractURL}>
                                \n${r.data.Abstract}`)
                            } else { 
                                message.reply('Nothing found.')
                            }
                        })
                        .catch(e => {
                            console.log(e)
                            message.reply('Error. See console for information.')
                        })
                } else { 
                    message.reply('No search args given.')
                }
                
                // message_channel.send('ok')
            break

            case 'roll':
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
                message.reply(`Results: \n${roll_results.join('\n')}\nTotal: ${results_total}`)
            break

            case 'clear': 
                message_channel.send('_\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_')
            break

            default: 
            break
        }
    }
})