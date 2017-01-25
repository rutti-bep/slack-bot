'use strict';
var responseFunction = function(res,teamName,toolKit){
    if(res.text === "てすとー"){
       toolKit.send("てすとーレスる",teamName);
    }
}

module.exports = responseFunction;
