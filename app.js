var request = require('request');
var CronJob = require('cron').CronJob;

new CronJob('')

var settings = require('./setting.json');

post("起動しますた");
var startLesson = new CronJob("0 30 10-16 * * 1-5",function(){post("授業開始だよ!")},null,true,"Asia/Tokyo")
var endLesson = new CronJob("0 20 11-16 * * 1-5",function(){post("休み時間だよ!")},null,true,"Asia/Tokyo")

function post(text){
    request.post('https://slack.com/api/chat.postMessage',
       {form: {
            token: settings.token,
            channel: settings.channel,
            username: settings.username,
            as_user: true,
            text: text
        }}
        , (error, res, body) => {
            console.log(error);
            console.log(res);
        }
    )
}
