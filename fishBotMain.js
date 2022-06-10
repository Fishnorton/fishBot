const {Client, Intents} = require('discord.js');
require('dotenv').config();
//console.log(process.env);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-';

client.once('ready', () => {
    console.log('Fish Bot is online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong');
    }
});

client.login(process.env.DISCORD_TOKEN);