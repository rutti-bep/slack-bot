var request = require('request');
var CronJob = require('cron').CronJob;

var token = process.env.SLACKBOT_TOKEN;
var channel = process.env.SLACKBOT_CHANNEL;
var username = process.env.SLACKBOT_USERNAME;

post("起動しますた");
var startLesson = new CronJob("0 30 10-16 * * 1-5",function(){post("授業開始だよ!")},null,true,"Asia/Tokyo")
var endLesson = new CronJob("0 20 11-16 * * 1-5",function(){post("休み時間だよ!")},null,true,"Asia/Tokyo")
var moveIdentify = new CronJob("0 * * * * *",function(){console.log("move!");},null,true,"Asia/Tokyo")

function post(text){
    request.post('https://slack.com/api/chat.postMessage',
       {form: {
            token: token,
            channel: channel,
            username: username,
            as_user: true,
            text: text
        }}
        , (error, res, body) => {
            console.log(error);
            console.log(body);
        }
    )
}
