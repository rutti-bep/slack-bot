'use strict'
const request = require('request');
function vote(res, teamName, toolKit) {
  const vote_text = res.text.slice(res.text.indexOf("vote"));
  const emojis = vote_text.match(/:([^\s]+):/g).map(value =>{
    return value.replace(/:/g, '');
  });
  if(emojis == null){
    return ;
  }
  console.log(emojis);
  const timestamp = res.ts;
  const channel = res.channel;
}

module.exports = {vote: vote};

