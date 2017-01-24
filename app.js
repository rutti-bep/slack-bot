var request = require('request');
var settings = require('./setting.json');

console.log(settings);

request.post('https://slack.com/api/chat.postMessage',
    {form: {
            token: settings.token,
            channel: settings.channel,
            username: settings.username,
            text: 'てすとー!!!!!!!',
            as_user: true
    }}
    , (error, res, body) => {
        console.log(error);
        console.log(res);
        console.log(body);
    }
)
