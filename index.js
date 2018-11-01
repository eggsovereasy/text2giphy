const SlackBot = require('slackbots');
const axios = require('axios');
const config = require('./config');

const bot = new SlackBot({
    token: config.botToken,
    name: 'text2giphy'
});

const botParams = {
    icon_emoji: ':cat:'
}

// start handler
bot.on('start', () => {
    bot.postMessageToChannel('general', 'text2giphy online', botParams);
});

// message handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return; // i only want messages
    }
    getGyph(data.text);
});

// get the gif from giphy
function getGyph(msg) {
    var url = 'http://api.giphy.com/v1/gifs/translate?api_key=' + config.giphyApikey + '&s=' + msg;
    axios.get(url)
        .then(response => {
            // post it to gif channel
            bot.postMessageToChannel(
                'general_giphy',
                response.data.data.images.original.url,
                botParams
            )
        })
}

// deal with error
bot.on('error', (err) => {
    console.log(err);
})