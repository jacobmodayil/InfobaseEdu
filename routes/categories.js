var express = require('express');
var router = express.Router();


var Category = require('../models/category');

/* GET all categories. */
router.get('/', function(req, res, next) {
  Category.getCategories(function(err, categories){
  if(err)
  {
    console.log(err);
  }
  res.json(categories);
})
});

/* GET category by ID. */
router.get('/:id', function(req, res, next) {
  Category.getCategoryById(req.params.id,function(err, category){
  if(err)
  {
    console.log(err);
  }
  res.json(category);
})
});

// Create category
router.post('/', function(req, res, next){
  //Get form values
  var name = req.body.name;
  var description = req.body.description;

  // Category object
  var newCategory = new Category({
    name: name,
    description: description
  });

  Category.createCategory(newCategory, function(err, article){
    if(err){
      Console.log(err);
    }
    res.location('/categories');
    res.redirect('/categories');
  });
});

// Delete category
router.delete('/:id', function(req, res, next){
  //Get form values
  var id = req.body.id;
  //Delete category
  Article.removeCategory(id, function(err, category){
    if(err){
      Console.log(err);
    }
    res.location('/categories');
    res.redirect('/categories');
  });
});
module.exports = router;
