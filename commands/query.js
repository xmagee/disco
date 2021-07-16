axios = require('axios')

module.exports = {

    q: function(message, message_content) {
        message_content.shift()
        var search_query = message_content.join(' ')
        if (search_query !== undefined) {
            axios.get(`https://api.duckduckgo.com/?format=json&q=${search_query}`)
                .then(r => {
                    if (r.status === 200 && r.data.Abstract !== '') {
                        message.reply(`**From ${r.data.AbstractSource} - <${r.data.AbstractURL}>:**\n${r.data.Abstract}`)
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
    }

}
