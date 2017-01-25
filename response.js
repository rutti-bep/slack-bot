'use strict';
const vote = require('./vote');
var responseFunction = function(res,teamName,toolKit){
    if(res.text === "てすとー"){
       toolKit.send("てすとーレスる",teamName);
    }
    if(resText.match(/vote/g)){
      console.log(res.text);
      vote.vote(res, teamName, send);
    }
}

module.exports = responseFunction;
