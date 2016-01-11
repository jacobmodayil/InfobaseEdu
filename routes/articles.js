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

// Create article
router.post('/', function(req, res, next){
  //Get form values
  var title = req.body.title;
  var category = req.body.category;
  var body =req.body.body;

  // Article object
  var newArticle = new Article({
    title: title,
    category: category,
    body: body
  });

  Article.createArticle(newArticle, function(err, article){
    if(err)
    {
      Console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  });
});

// Update article
router.put('/:id', function(req, res, next){
  //Get form values
  var id = req.body.id;
  var data = {
     title: req.body.title,
     category: req.body.category,
     body: req.body.body
  };
  //Update article
  Article.updateArticle(id, data, function(err, article){
    if(err){
      Console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  });
});

// Delete article
router.delete('/:id', function(req, res, next){
  //Get form values
  var id = req.body.id;
  //Delete article
  Article.removeArticle(id, function(err, article){
    if(err){
      Console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  });
});
module.exports = router;
