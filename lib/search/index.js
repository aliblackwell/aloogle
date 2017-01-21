require("babel-polyfill");
const cheerio = require('cheerio');
const request = require('request');

function getTheGoogleResult(query) {

  let options = {
    url: "https://www.google.co.uk/search?q="+ encodeURIComponent(query),
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

  return new Promise((resolve, reject) => {

    request(options, (err, response, body) => {

      if (err) {
        reject(err); return;
      }

      resolve(body);

    })
  })
}

function parseTheGoogleResult(body) {

    const $ = cheerio.load(body)
    let answer = $('._Tgc').text();
    console.log('answer:'+answer);
    //answer = answer.length > 0 ? answer : "I couldn't find a result";
    return answer;

}

async function search(query, res) {

  try {
    const body = await getTheGoogleResult(query);
    const result = await parseTheGoogleResult(body);
    console.log(result.length);
    if (result.length > 0) {
      res.card({
        type: "Simple",
        title: query, // this is not required for type Simple
        content: result
      });
      res.say(result).send();
    } else {

      res.say('I searched for '+ query, 'Try again?').shouldEndSession(false).send();
    }


  } catch (e) {
    res.say("Oh dear, there's been an error");
    res.send();
    // promise was rejected and we can handle errors with try/catch!
    console.log(e);
  }

}

module.exports = search;
