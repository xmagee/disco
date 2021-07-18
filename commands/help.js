
module.exports = {

    help: function(message, message_content, command_prefix) {
        message_content.shift()
        if (message_content.length === 0) {
            message.reply(`**Available commands:**
- ${command_prefix}source 
- ${command_prefix}help
- ${command_prefix}q
- ${command_prefix}roll
- ${command_prefix}clear
- ${command_prefix}echo
- ${command_prefix}invite
**For help on a specific command, send: \`${command_prefix}help [command_name_here]\`**`)
        } else { 
            switch (message_content[0]) {
                case 'source':
                    message.reply(`**Command 'source':**
**Args:** n/a
**Functionaliy:** prints url of this bot's source code
**Example:** \`${command_prefix}source\``)
                break
                
                case 'help':
                    message.reply(`**Command: 'help':**
**Args:** n/a, or the name of an available command
**Functionaliy:** shows help command, or prints help for specific command
**Examples:** \`${command_prefix}help\` or \`${command_prefix}help roll\``)
                break

                case 'q':
                    message.reply(`**Command 'q':**
**Args:** a search query
**Functionality:** prints results of a search query
**Example:** \`${command_prefix}q system of a down\``)
                break

                case 'roll':
                    message.reply(`**Command 'roll':**
**Args:** n/a, or number of dice to roll
**Functionality:** rolls die/dice, prints result(s)
**Examples:** \`${command_prefix}roll\` or \`${command_prefix}roll 3\``)
                break

                case 'clear':
                    message.reply(`**Command 'clear':**
**Args:** n/a
**Functionality:** clears the screen
**Example:** \`${command_prefix}clear\``)
                break

                case 'echo':
                    message.reply(`**Command 'echo':**
**Args:** any
**Functionality:** echoes back what was entered as an arg.
**Example:** \`${command_prefix}echo hello world\``)
                break

                case 'invite': 
                    message.reply(`**Command 'invite': **
**Args:** n/a
**Functionality:** prints an invite link for the server
**Example:** \`${command_prefix}invite\``)
                break

                default: //TODO: 'did you mean... ?'
                    message.reply(`No command available that matches '${message_content[0]}'.`)
                break
            }
        }
    }

}
