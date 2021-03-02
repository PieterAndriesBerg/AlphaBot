import { Client } from 'discord.js';

const bot = new Client();

bot.on('ready', () => {
    console.log('Bot is ready!');
})

bot.on('message', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply('Hi');
})


bot.login('ODE2MjU1NTg0NTM3MDE4Mzc4.YD4TQA.Lpt9ZuU21bYn-siInrFuuePtPDE');