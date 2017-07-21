// Dependencies

var express = require("express");
var expHbs = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require('morgan');
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");

// Set mongoose to use ES6 Promises
mongoose.Promise = Promise;

// Require article model
var Article = require('./articleModel.js');

// Create instance of express
var app = express();
const PORT = 3001;

// User morgan in dev mode to log relevant information to the console
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

// const MONGODB_URI = "mongodb://heroku_8fpz7mpz:rhnm9h6727pte92f8cvge94nsb@ds157342.mlab.com:57342/heroku_8fpz7mpzs"
// mongoose.connect(MONGODB_URI);
var promise = mongoose.connect("mongodb://localhost/scraper", {
    useMongoClient: true
});
var db = mongoose.connection;

promise.then(function (db) {
    connection.openUri('mongodb://localhost/scraper');
    console.log(db);
});

// var scrapedData =

// console.log(db.collections);

// Show any mongoose errors
db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success messagepromise.then(function (db) {
db.once("openUri", function () {
    console.log("Mongoose connection successful.");
});

// Tell express to use the directory 'public' to serve static files from
app.use(express.static('public'));


app.get("/", function (req, res) {
    res.send("Hello, world!");
});

app.get("/all", function (req, res) {
    Article.find({}, function (err, found) {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});

app.get("/scrape", function (req, res) {

    request("https://www.edmsauce.com/news/", function (error, response, html) {
        var $ = cheerio.load(html);
        // var scrapedData = db.collection;
        $(".entry-title").each(function (i, element) {
            var articleTitle = $(this).text();
            console.log(articleTitle);
            var articleLink = $(this).children("a").attr("href");
            console.log(articleLink);
            // console.log(db);
            // console.log(db.scrapedData);

            if (articleTitle && articleLink) {
                var article = new Article({
                    articleTitle: articleTitle,
                    articleLink: articleLink
                });
                // scrapedData.save({
                //     articleTitle: articleTitle,
                //     articleLink: articleLink
                // },
                article.save(function (error, saved) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log(saved);
                    }
                })
            }
        })
    });
    // Save
    scrapedData.save(function (error, doc) {
        if (error) {
            res.send(error);
        }
        else {
            res.send(doc);
        }
    });
    res.send("Scrape Complete!");
});



// Tell the app to listen on the selected port.
app.listen(PORT);
console.log("App is listening on port: ", PORT);
