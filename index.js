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
    bot.postMessageToChannel(config.giphyChannel, 'text2giphy online', botParams);
});

// message handler
bot.on('message', (data) => {
    // TODO: ignore messages posted by text2giphy or it could cause an infinite loop    
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
                config.giphyChannel,
                response.data.data.images.original.url,
                botParams
            )
        })
}

// deal with error
bot.on('error', (err) => {
    console.log(err);
})