'use strict';

require("babel-polyfill");
var alexa = require('alexa-app');
var search = require('../search');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app(''); // blank string serves it at the root

app.launch(function (req, res) {
  res.say("Go on");
  res.shouldEndSession(false);
});

app.intent('SearchIntent', {
  "slots": { "Query": "SEARCH_QUERY" },
  "utterances": ["{Query}"]
}, function (req, res) {
  var query = req.slot('Query');
  search(query, res);
  return false;
});

module.exports = app;