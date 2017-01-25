var slack = require('./slack');
var cronSchedule = require('cronSchedule');

slack.debugSend("起動しますた");


//var test = new CronJob("0 * * * * *",function(){slack.send("cronテスト")},null,true,"Asia/Tokyo")

slack.listenStart();
