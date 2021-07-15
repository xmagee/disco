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
    MICRO_API_KEY=m3o_api_key_here
    ```
    - [how to get discord bot token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) (need to create a bot)
    - [how to get m3o api key](https://m3o.com/settings/keys) (you will need an account)
* `$ npm run`

## bot commands
| command   | args | functionality                         |
|-----------|------|---------------------------------------|
| `!source` | n/a  |  prints url of this bot's source code |
