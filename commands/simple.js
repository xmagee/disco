
module.exports = {

    source: function(message) {
        message.reply('<https://github.com/xmagee/disco>')
    }, 

    echo : function(message, message_content) {
        message_content.shift()
        message.reply(message_content.join(' '))
    }

}
