var slack = require('./slack');
var cronSchedule = require('./cronSchedule');

slack.debugSend("起動しますた");

//cronSchedule.scheduleStart(slack.send);

slack.listenStart();
