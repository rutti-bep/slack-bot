var CronJob = require('cron').CronJob;

var slack = require('./slack');

console.log("起動しますた");
var startLesson = new CronJob("0 30 10-16 * * 1-5",function(){slack.send("授業開始だよ!")},null,true,"Asia/Tokyo")
var endLesson = new CronJob("0 20 11-16 * * 1-5",function(){slack.send("休み時間だよ!")},null,true,"Asia/Tokyo")
var moveIdentify = new CronJob("0 * * * * *",function(){console.log("move!");},null,true,"Asia/Tokyo")

