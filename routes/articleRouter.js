const express = require('express')
const articleRouter = express.Router()
const Article = require('../models/article')



articleRouter.get('/', (req,res,next) => {
  Article.find( (err,article) => {
    if(err) {
      res.status(501)
      next(err)
    } else {
      res.status(201).send(article)
    }
  })
})

articleRouter.get('/:_id', (req,res,next) => {
  Article.findById({_id: req.params._id}, (err,article) => {
    
    if(err) {
      res.status(501)
      next(err)
    } else {
      res.status(201).send(article)
    }
  })
})

articleRouter.post('/', (req,res,next) => {
  const newArticle = new Article(req.body)
  
  newArticle.user = req.body.user
  newArticle.save( (err, article) => {
    if(err) {
      res.status(501)
      next(err)
    } else {
      res.status(201).send(article)
    }
  })
})




module.exports = articleRouter