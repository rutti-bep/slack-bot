var CronJob = require('cron').CronJob;

var slack = require('./slack');

slack.debugSend("起動しますた");
var startLesson = new CronJob("0 30 10-16 * * 1-5",function(){slack.send("授業開始だよ!")},null,true,"Asia/Tokyo")
var endLesson = new CronJob("0 20 11-16 * * 1-5",function(){slack.send("休み時間だよ!")},null,true,"Asia/Tokyo")
var endLassonOnDay = new  CronJob("0 20 17 * * 1-4",function(){slack.send("今日はこれで終わりだよ!お疲れー!")},null,true,"Asia/Tokyo")
var endLassonOnFriDay = new  CronJob("0 20 17 * * 5",function(){slack.send("後はHRで終わりだよ！１週間お疲れー!")},null,true,"Asia/Tokyo")
//var test = new CronJob("0 * * * * *",function(){slack.send("cronテスト")},null,true,"Asia/Tokyo")

slack.listenStart();
