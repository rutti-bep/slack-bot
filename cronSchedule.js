"use strict";
var CronJob = require('cron').CronJob;
const syaroChallenge = require("./syaroChallenge");

function scheduleStart(slackSend){
  var startLessonOnAm = new CronJob("0 30 10 1 4 *",function(){slackSend("<!channel> 授業開始だよ!")},null,true,"Asia/Tokyo")
  var aprilComment = new  CronJob("30 30 10 1 4 *",function(){slackSend("<!channel> なんてな！エイプリルフールだよ！！")},null,true,"Asia/Tokyo")
  
  var syaroChan = new CronJob('0 0 * * * *',function(){slackSend(syaroChallenge())},null,true,"Asia/Tokyo");
}

module.exports = {scheduleStart: scheduleStart};
