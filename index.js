require('dotenv').config()
var Discord = require('discord.js'),
    client = new Discord.Client({
        partials: ['MESSAGE']
    }),
    command_prefix = process.env.PREFIX_CHAR, 
    simple_commands = require('./commands/simple'), 
    util_commands = require('./commands/utility'), 
    game_commands = require('./commands/game'), 
    query_commands = require('./commands/query'), 
    help_commands = require('./commands/help')

client.login(process.env.DISCORD_BOT_TOKEN)

client.on('ready', () => {
    console.clear()
    client.user.setActivity('paint dry', { type: 'WATCHING' });
    console.log('Ready 🤖')
})

client.on('message', msg => {
    if (msg.content.charAt(0) === command_prefix) {
        var message = msg, 
            message_content = message.content.replace(command_prefix, '').split(' '), 
            message_channel = message.channel

        switch(message_content[0]) {
            case 'source':
                simple_commands.source(message)
            break

            case 'help': 
                help_commands.help(message, message_content, command_prefix)
            break

            case 'q':
                query_commands.q(message, message_content)
            break

            case 'roll':
                game_commands.roll(message, message_content)
            break

            case 'clear': 
                util_commands.clear(message_channel)
            break

            default: 
            break
        }
    }
})