require("babel-polyfill");
const alexa = require('alexa-app');
const search = require('../search');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
let app = new alexa.app(''); // blank string serves it at the root

app.launch(function(req,res) {
  res.say("Go on");
  res.shouldEndSession(false);
});



app.intent('SearchIntent', {
  "slots":{"Query":"SEARCH_QUERY"},
  "utterances": [
    "{Query}"
  ]
}, function (req,res) {
  const query = req.slot('Query');
  search(query, res);
  return false;
});

module.exports = app;
