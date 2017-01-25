'use strict';
var responseFunction = function(res,teamName,send){
    if(res.text === "てすとー"){
       send("てすとーレスる",teamName);
    }
}

module.exports = responseFunction;
