const SlackBot = require('slackbots');

const bot = new SlackBot({
    token: 'xoxb-468390490501-468193724722-woPtLvq47fOpoBRC3a0b7Bpg',
    name: 'text2giphy'
});

// start handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':ok:'
    }

    bot.postMessageToChannel('general', 'text2giphy online', params);
});