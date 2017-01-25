'use strict'
const request = require('request');
function vote(text, teamName, toolKit) {
  const vote_text = text.slice(text.indexOf("vote"));
  const emojis = vote_text.match(/:([^\s]+):/g);
  if(emojis == null){
    return ;
  }
}

module.exports = {vote: vote};

