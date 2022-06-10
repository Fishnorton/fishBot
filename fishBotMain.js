const {Client, Intents} = require('discord.js');
require('dotenv').config()
console.log(process.env);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Fish Bot is online');
});

client.login(process.env.DISCORD_TOKEN);