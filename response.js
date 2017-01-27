'use strict';
const vote = require('./vote');
var bugRegExp = /(\S死|バグ|困)/;
var responseFunction = function(res,teamName,toolKit){
    if(res.text === "てすとー"){
      toolKit.send("てすとーレスる",teamName);
    }
    if(bugRegExp.test(res.text)){
      toolKit.send("プ ロ セ ス よ\n死 ん で し ま う と は\nな さ け な い",teamName);
    }
    if(res.text && res.text.match(/vote/g)){
      vote.vote(res, teamName, toolKit);
    }
}

module.exports = responseFunction;
