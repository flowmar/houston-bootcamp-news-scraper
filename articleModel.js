// Dependencies
var mongoose = require('mongoose');

// Create the Schema class
var Schema = mongoose.Schema;

// Schema for an article
var ArticleSchema = new Schema({
    // articleTitle: a trimmed string
    articleTitle: {
        type: String,
        trim: true
    },
    articleLink: {
        type: String,
        trim: true
    }
});


// Use the schema above to make the Article model
var Article = mongoose.model("Article", ArticleSchema);

// Export the model so the server can use it
module.exports = Article;