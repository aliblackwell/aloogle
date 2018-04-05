# Aloogle

Aloogle is a project that challenges the walled gardens that nourish the winners of network-effect monopolies, in particular, Google and Amazon.

## Background

Google's famous mission statement is to ["organize the world's information and make it universally accessible and useful"](https://www.google.com/about/our-company/). Google built their position of dominance by scraping websites. Google programatically browses the web, storing everything it finds in its search index. Google Search made this information directly accessible to web users. But Google went further: they digest and process all the information that people publish to the web, building up a knowledge graph that enables their Google Assistant to answer questions such as "What's the capital of Spain?" They also use this knowledge graph to publish "featured snippets" in Google Search, meaning people can find answers to questions without visiting the original publisher's website. This is all good for the user, but not so great for publishers and the health of the wider web.

I was disappointed but not surprised to discover that Amazon's Alexa gave the user no option to Google anything. This led me to wonder what it would take to build an unofficial Google app for Alexa. And so Aloogle was born.

Aloogle is a violation of Google's terms of service, as they forbid scraping. Oh the irony!

Aloogle is an Alexa app that allows a user to say, "Alexa, ask Aloogle what's the capital of Spain?". Aloogle will then surreptitiously Google the query, extract the contents of Google's featured snippet, and get Alexa to read it to the user.

At last. You can Google stuff on your Alexa.

## Dependencies

You will need to familiarise yourself with Amazon's Alexa Skills Kit. According to Amazon, you can [Develop an Alexa Skill in under 5 minutes](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial).

Aloogle stands on the shoulders of the following projects:

* [Alexa App Server](https://github.com/alexa-js/alexa-app-server)
* [Alexa Verifier Middleware](https://github.com/alexa-js/alexa-verifier-middleware)

## Running Locally

It is written in Node with Express. To test it out, simply clone this repo, install dependencies, and run the dev server:

```
$ git clone https://github.com/aliblackwell/aloogle.git
$ npm install
$ npm run dev
```

Visiting http://localhost:8081/ in your browser will give you a test interface to send test queries to Aloogle and the scraper.

## Running on Alexa

For whatever reason, I concluded that Aloogle couldn't run as an AWS Lambda Function. I'd love to be proven wrong as it would be simpler to setup.

You'll need to setup an EC2 Instance and configure it to serve the app over HTTPS. When you submit the skill to Amazon (do follow the above tutorial), they provide a guide for doing this.

You can run the skill on your own Alexa in development mode. I'd love to see someone submit a version of this app to Amazon for approval ;)

## Questions / comments

It's been over a year since I did this project. Just updating this README from memory mostly. The scraper code may need looking at as Google have probably since altered their source code.

But if this project has piqued your interest, I'd be well up for discussing how to use it to challenge walled gardens and make people realise the web belongs to all of us, and we can choose whether to accept these network-effect monopolies, or whether to give them two fingers.

I know which I choose ;)
