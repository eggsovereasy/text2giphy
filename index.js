const SlackBot = require('slackbots');

const bot = new SlackBot({
    token: 'xoxb-468390490501-468193724722-woPtLvq47fOpoBRC3a0b7Bpg',
    name: 'text2giphy'
});

// start handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':cat:'
    }

    bot.postMessageToChannel('general', 'text2giphy online', params);
});

// message handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return; // i only want messages
    }

    handleMessage(data);
});

function handleMessage(msg) {
    bot.postMessageToChannel('general_giphy', '/giphy ' + msg.text);
}

// deal with error
bot.on('error', (err) => {
    console.log(err);
})