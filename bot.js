const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');


const token = '1060560211:AAEYz6JfMVpWFINsmaZ-eNTk36KyHNdN-sY';

const bot = new TelegramBot(token, { polling: true });

bot.on('polling_error', function (error) {
    console.log(error);
});

bot.onText(/^\/start/, function (msg) {
    var chatId = msg.chat.id;
    var nameUser = msg.from.first_name;

    bot.sendMessage(chatId, "Bienvenido a mi bot" + nameUser);
});

bot.onText(/^\/oferta/, (msg) => {
    axios.get('https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery')
        .then(response => {
            bot.sendMessage(msg.chat.id, "La oferta del dia es " + response.data);

        })
});

bot.onText(/^\Hola/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name);
});