'use strict';
const vote = require('./vote');
var responseFunction = function(res,teamName,toolKit){
    if(res.text === "てすとー"){
       toolKit.send("てすとーレスる",teamName);
    }
    if(res.text && res.text.match(/^vote/g)){
        vote.vote(res, teamName, toolKit);
    }
}

module.exports = responseFunction;
