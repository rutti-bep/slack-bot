'use strict';
var responseFunction = function(resText,teamName,send){
    if(resText === "てすとー"){
       send("てすとーレスる",teamName); 
    }
}

module.exports = responseFunction;
