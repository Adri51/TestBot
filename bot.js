const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');


const token = '1060560211:AAEYz6JfMVpWFINsmaZ-eNTk36KyHNdN-sY';

const bot = new TelegramBot(token, { polling: true });

bot.on('polling_error', function (error) {
    console.log(error);
});

bot.onText(/^\Oferta/, (msg) => {
    axios.get('https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery')
        .then(response => {
            bot.sendMessage(msg.chat.id, "La oferta del dia es " + response.data);

        })
});

bot.onText(/^\oferta/, (msg) => {
    axios.get('https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery')
        .then(response => {
            bot.sendMessage(msg.chat.id, "La oferta del dia es " + response.data);

        })
});