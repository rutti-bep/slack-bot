'use strict';
var request = require('request');
var WS = require('ws');

var responseFunction = require('./response');

var token = process.env.SLACKBOT_TOKEN;
var channel = process.env.SLACKBOT_DEFAULTCHANNEL || process.env.SLACKBOT_CHANNEL;
var debugChannel = process.env.SLACKBOT_DEBUGCHANNEL || channel;
var username = process.env.SLACKBOT_USERNAME;
var responseAuthority = process.env.SlACKBOT_RESPONCE_AUTHORITY || "private";

var ws;
var channels = [];
var channelLength;

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

const toolKit = {
  send: send,
  debugSend: debugSend
}
function debugSend(text){
  send(text,debugChannel);
}

function listenStart(){
    if(responseAuthority === "public"){
        channelPublicGet(function(){
           channelPrivateGet(function(){
             rtmStart()
           });
        });
    }else{
        channelPrivateGet(function(){
           rtmStart()
        });
    }
}

function channelPublicGet(next){
    request.post("https://slack.com/api/channels.list",{form: {token: token,exclude_archived : 1}}
    ,function(err, res, body){
      console.log(body);
       var parsedRes = JSON.parse(body);
       var groupCount = parsedRes['channels'].length;
       for(var i = 0; i < groupCount;i++){
         channels.push({id : parsedRes.channels[i].id, name : parsedRes.channels[i].name});
       }
       channelLength = channels.length;
       next();
    })
}

function channelPrivateGet(next){
    request.post("https://slack.com/api/groups.list",{form: {token: token,exclude_archived : 1}}
    ,function(err,res,body){
       var parsedRes = JSON.parse(body);
       var groupCount = parsedRes['groups'].length;
       for(var i = 0; i < groupCount;i++){
         channels.push({id : parsedRes.groups[i].id, name : parsedRes.groups[i].name});
       }
       channelLength = channels.length;
       next();
    })
}

function rtmStart(){
  console.log(channels);
    request.post("https://slack.com/api/rtm.start",{json :true,qs:{token:token}}
        ,function(err,res,body){
            ws = new WS(body.url, {agent: null});
            ws.on('open',function(){
              console.log("open");
            })
            ws.on('pong',function(){
                console.log("pong");
            })
            ws.on('message',function(res,body){
                var parsedRes = JSON.parse(res);
                if(parsedRes["type"] === "message"){
                   for (var i = 0;i < channelLength;i ++){
                     if(channels[i].id === parsedRes.channel){
                       responseFunction(parsedRes,channels[i].name,toolKit);
                     }
                   }
                }
                console.dir(parsedRes);
            })
    })
}


module.exports = {send : send,debugSend : debugSend, listenStart : listenStart};
