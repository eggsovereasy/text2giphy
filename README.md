# text2giphy
slack bot to listen in one channel and post giphy in another

Bot will listen in any channels its invited to and will post to the channel set in the config.

To add the config just create a config.js file that looks like this:

```javascript
var config = {
    giphyApikey: '',
    botToken: '',
    giphyChannel: ''
}

module.exports = config;
```

Where:
- giphyApiKey is your api_key for api.giphy.com
- botToken is the OAuth token given by slack when you install the app
- giphyChannel is the channel you want the bot to post to
