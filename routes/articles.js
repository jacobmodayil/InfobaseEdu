var express = require('express');
var router = express.Router();

// Due to the model exports in the model, the Article object will have access to the data retreived.
var Article = require('../models/article');

/* GET all articles. */
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
  if(err)
  {
    console.log(err);
  }
  res.json(articles);
})
});

/* GET article by ID. */
router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id,function(err, article){
  if(err)
  {
    console.log(err);
  }
  res.json(article);
})
});

/* GET articles by category. */
router.get('/category/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category,function(err, articles){
  if(err)
  {
    console.log(err);
  }
  res.json(articles);
})
});


module.exports = router;
