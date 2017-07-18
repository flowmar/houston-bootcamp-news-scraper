// Dependencies

var express = require("express");
var expHbs = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require('morgan');
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var path = require('path');

// Create instance of express
var app = express();
const PORT = 3000;

const MONGODB_URI = "mongodb://heroku_8fpz7mpz:rhnm9h6727pte92f8cvge94nsb@ds157342.mlab.com:57342/heroku_8fpz7mpzs"

// Tell express to use the directory 'public' to serve static files from
app.use(express.static('public'));


// Tell the app to listen on the selected port.
app.listen(PORT);
console.log("App is listening on port: ", PORT);
