var express = require("express");
var expHbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var path = require('path');

var app = express();
const PORT = 3030;

const MONGODB_URI = "mongodb://heroku_8fpz7mpz:rhnm9h6727pte92f8cvge94nsb@ds157342.mlab.com:57342/heroku_8fpz7mpzs"

app.listen(PORT);
console.log("App is listening on port: ", PORT);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

