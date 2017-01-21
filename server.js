var express = require("express");
const aloogle = require("./dist/aloogle");
var bodyParser = require("body-parser");
const avm = require('alexa-verifier-middleware')
var app = express();
var PORT = process.env.port || 8081;

// note that the 'avm' middleware is loaded first
app.use(avm());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

aloogle.express(app, "/", true);

app.listen(PORT);
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT);