const express = require('express')
const articleRouter = express.Router()
const Article = require('../../models/article')
const moment = require('moment')





//catagories
articleRouter.get('/business', (req,res,next) => {
  let query = Article.find()
      query.where({published: true, catagory: 'Business' })
      query.populate('user')
      query.exec(  (err, article) => {
        if(err) return next(err)
          res.send(article)
      })
})
articleRouter.get('/art', (req,res,next) => {
  let query = Article.find()
      query.where({published: true, catagory: 'Art'})
      query.populate('user')
      query.exec(  (err, article) => {
        if(err) return next(err)
          res.send(article)
      })
})
articleRouter.get('/politics', (req,res,next) => {
  let query = Article.find()
  query.where({published: true, catagory: 'Politics' })
  query.populate('user')
      query.exec(  (err, article) => {
        if(err) return next(err)
          res.send(article)
      })
})
articleRouter.get('/recent', (req,res,next) => {
  
  
  let query = Article.find()
      query.where({published: true})
      query.limit(20)
      query.populate('user')
      query.sort({'date': -1})
      query.exec(  (err, article) => {
        if(err) return next(err)
          res.send(article)
      })
})


articleRouter.get('/trending', (req,res,next) => {
  let query = Article.find()
  query.where({published: true})
  query.limit(20)
  query.populate('user')
  query.sort({likes: -1})
  query.exec(function (err,art) {
    if(err) return next(err)
    res.send(art)
  })
})

//get all. 


//get everything from user
articleRouter.get('/user/:_id', (req,res,next) => {
  Article.find({user: req.params._id}, (err,article) => {
    
    if(err) {
      res.status(501)
      next(err)
    } else {
      res.status(200).send(article)
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