# disco
A Discord bot.

## run this
* `$ git clone git@github.com:xmagee/disco.git && cd disco`
* `$ npm install`
* create a .env file: `touch .env`, then enter info: 
    ```
    IS_PROD=false
    PREFIX_CHAR='!'
    DISCORD_BOT_TOKEN=discord_bot_token_here
    ```
    [get a discord bot token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) (will need a discord account)
* `$ npm start`

## bot commands
| command   | args          | functionality                                            |
|-----------|---------------|----------------------------------------------------------|
| `!source` | n/a           | prints url of this bot's source code                     |
| `!help`   | n/a or string | prints help command, or prints help for specific command |
| `!q`      | string[]      | prints results of a search query                         |
| `!roll`   | n/a or int    | rolls die/dice, prints result(s)                         |
| `!clear`  | n/a           | clears the screen                                        |
