'use strict'
function vote(text, teamName, toolKit) {
  console.log("text:", text);
  toolKit.send(text, teamName);
}

module.exports = {vote: vote};

