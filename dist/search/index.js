'use strict';

require("babel-polyfill");
var cheerio = require('cheerio');
var request = require('request');

function getTheGoogleResult(query) {

  var options = {
    url: "https://www.google.co.uk/search?q=" + encodeURIComponent(query),
    headers: {
      'Cache-Control': 'max-age=0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36',
      'HTTPS': 1,
      'DNT': 1,
      'Referer': 'https://www.google.co.uk',
      'Accept-Language': 'en-US,en;q=0.8,en-GB;q=0.6,es;q=0.4'
    }
  };

  return new Promise(function (resolve, reject) {

    request(options, function (err, response, body) {

      if (err) {
        reject(err);return;
      }

      resolve(body);
    });
  });
}

function parseTheGoogleResult(body) {

  var $ = cheerio.load(body);
  var answer = $('._Tgc').text();
  console.log('answer:' + answer);
  //answer = answer.length > 0 ? answer : "I couldn't find a result";
  return answer;
}

function search(query, res) {
  var body, result;
  return regeneratorRuntime.async(function search$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getTheGoogleResult(query));

        case 3:
          body = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(parseTheGoogleResult(body));

        case 6:
          result = _context.sent;

          console.log(result.length);
          if (result.length > 0) {
            res.card({
              type: "Simple",
              title: query, // this is not required for type Simple
              content: result
            });
            res.say(result).send();
          } else {

            res.say('I searched for ' + query).shouldEndSession(false, 'Try again').send();
          }

          _context.next = 16;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](0);

          res.say("Oh dear, there's been an error");
          res.send();
          // promise was rejected and we can handle errors with try/catch!
          console.log(_context.t0);

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this, [[0, 11]]);
}

module.exports = search;