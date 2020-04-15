const express = require('express')
const articleRouter = express.Router()
const Article = require('../../models/article')
const moment = require('moment')


articleRouter.get('/business', (req,res,next) => {
  let query = Article.find({'catagory': 'Business' })

      query.exec(  (err, article) => {
        if(err) return next(err)
          res.send(article)
      })
})
articleRouter.get('/art', (req,res,next) => {
  let query = Article.find({'catagory': 'Art' })

      query.exec(  (err, article) => {
        if(err) return next(err)
          res.send(article)
      })
})
articleRouter.get('/politics', (req,res,next) => {
  let query = Article.find({'catagory': 'Politics' })

      query.exec(  (err, article) => {
        if(err) return next(err)
          res.send(article)
      })
})
articleRouter.get('/recent', (req,res,next) => {
  let query = Article.find()
      query.sort({date: -1})
      query.limit(20)
      query.exec(  (err, article) => {
        if(err) return next(err)
          res.send(article)
      })
})


articleRouter.get('/trending', (req,res,next) => {
  let query = Article.find()
  query.limit(20)
  query.sort({likes: -1})
  query.exec(function (err,art) {
    if(err) return next(err)
    res.send(art)
  })
})

articleRouter.get('/', (req,res,next) => {
  let query = Article.find()
  query.limit(20)
  query.exec(function (err,art) {
    if(err) return next(err)
    res.send(art)
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

//Like article, 

articleRouter.put('/like/:_id', (req,res,next) => {
  Article.findByIdAndUpdate(req.params._id, 
    {$inc: {likes: 1}},
    {new: true},
    (err, likedArticle) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(likedArticle)
  })
})
articleRouter.put('/unlike/:_id', (req,res,next) => {
  Article.findByIdAndUpdate(req.params._id, 
    {$inc: {likes: -1}},
    {new: true},
    (err, likedArticle) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(likedArticle)
  })
})




module.exports = articleRouter