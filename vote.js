'use strict'
const request = require('requests');

function vote(text, teamName, send) {
  if(text.match(/vote/g)){
    console.log(text);
    send(text);
  }
}

module.exports = {vote: vote};

