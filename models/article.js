var mongoose = require('mongoose');

//Defining the schema for the Articles object
var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//module.exports is to enable the Article Object to be accessed outside this file.
var Article = module.exports = mongoose.model('Article', articleSchema);

// Define methods to be used by routes

// Get all articles
module.exports.getArticles = function(callback){
  Article.find(callback);
}

// Get article by ID
module.exports.getArticleById = function(id, callback){
  Article.findById(id, callback);
}

// Get article by category
module.exports.getArticlesByCategory = function(category, callback){
  var query = {category: category};
  Article.find(query, callback);
}
