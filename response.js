'use strict';
const vote = require('./vote');

var responseFunction = function(res,teamName,toolKit){
    if(res.text === "てすとー"){
      toolKit.send("てすとーレスる",teamName);
    }
    if(res.text.match(/(\S死|バグ|困)/g)){
      toolKit.send("プ ロ セ ス よ\n死 ん で し ま う と は\nな さ け な い",teamName);
    }
    if(res.text.match(/(腹|はら)(減った|へった)/g)){
      toolKit.send("卵焼き食べりゅ？",teamName);
    }
    if(res.text && res.text.match(/vote/g)){
      vote.vote(res, teamName, toolKit);
    }
}

module.exports = responseFunction;
