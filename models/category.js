var mongoose = require('mongoose');

//Defining the schema for the Articles object
var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

//module.exports is to enable the Article Object to be accessed outside this file.
var Category = module.exports = mongoose.model('Category', categorySchema);

// Define methods to be used by routes
// Get all articles
module.exports.getCategories = function(callback){
  Category.find(callback);
}

// Get article by ID
module.exports.getCategoryById = function(id, callback){
  Category.findById(id, callback);
}

// Post a new category
module.exports.createCategory = function(newCategory, callback){
  newCategory.save(callback);
}
