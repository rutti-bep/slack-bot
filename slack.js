'use strict';
var request = require('request');
var WS = require('ws');

var responseFunction = require('./response');

var token = process.env.SLACKBOT_TOKEN;
var channel = process.env.SLACKBOT_CHANNEL;
var debugChannel = process.env.SLACKBOT_DEBUGCHANNEL
var username = process.env.SLACKBOT_USERNAME;
var ws;
var teams = [];
var teamLength;


//teamGet();

function send(text,channelId){ 
    request.post('https://slack.com/api/chat.postMessage',
       {form: {
            token: token,
            channel: channelId || channel,
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

function debugSend(text){
  send(text,debugChannel);  
}

function listenStart(){
    teamGet(function(){
      return rtmStart()
    });
    
}

function teamGet(next){
    request.post("https://slack.com/api/groups.list",{form: {token: token,exclude_archived: "1"}}
    ,function(err,res,body){
       var parsedRes = JSON.parse(body);
       var teamCount = parsedRes['groups'].length;
       for(var i = 0; i < teamCount;i++){
         teams.push({id : parsedRes.groups[i].id, name : parsedRes.groups[i].name});
       }
       console.log(teams)
       teamLength = teams.length;
       console.log(next)
       next();
    })
}

function rtmStart(){
    request.post("https://slack.com/api/rtm.start",{json :true,qs:{token:token}}
        ,function(err,res,body){
            ws = new WS(body.url, {agent: null});
            ws.on('open',function(){
              console.log("open");
            })
            ws.on('message',function(res,body){
                var parsedRes = JSON.parse(res);
                if(parsedRes["type"] === "message"){
                   for (var i = 0;i < teamLength;i ++){
                     if(teams[i].id === parsedRes.channel){
                       responseFunction(parsedRes.text,teams[i].name,send);
                     }
                   }
                }
                console.dir(parsedRes);
            })
    })
}


module.exports = {send : send,debugSend : debugSend, listenStart : listenStart};
