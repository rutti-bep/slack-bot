'use strict'
const request = require('request');
function vote(res, teamName, toolKit) {
  const vote_text = res.text.slice(text.indexOf("vote"));
  const emojis = vote_text.match(/:([^\s]+):/g);
  if(emojis == null){
    return ;
  }
  const timestamp = res.ts;
  const channel = res.channel;
}

module.exports = {vote: vote};

