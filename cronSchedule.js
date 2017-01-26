"use strict";
var CronJob = require('cron').CronJob;

function scheduleStart(slackSend){
    var startLessonOnAm = new CronJob("0 30 10-11 * * 1-5",function(){slackSend("授業開始だよ!")},null,true,"Asia/Tokyo")
    var startLessonOnPm = new CronJob("0 30 13-16 * * 1-5",function(){slackSend("授業開始だよ!")},null,true,"Asia/Tokyo")
    var endLessonOnAm = new CronJob("0 20 11-12 * * 1-5",function(){slackSend("休み時間だよ!")},null,true,"Asia/Tokyo")
    var endLessonOnPm = new CronJob("0 20 14-16 * * 1-5",function(){slackSend("休み時間だよ!")},null,true,"Asia/Tokyo")
    var endLassonOnDay = new  CronJob("0 20 17 * * 1-4",function(){slackSend("今日はこれで終わりだよ!お疲れー!")},null,true,"Asia/Tokyo")
    var endLassonOnFriDay = new  CronJob("0 20 17 * * 5",function(){slackSend("後はHRで終わりだよ！１週間お疲れー!")},null,true,"Asia/Tokyo")
    
}

module.exports = {scheduleStart: scheduleStart};
