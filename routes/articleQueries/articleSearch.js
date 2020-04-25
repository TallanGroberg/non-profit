const express = require('express')
const articleSearchRouter = express.Router()
const Article = require('../../models/article')


articleSearchRouter.get('/search/recent', (req,res,next) => {
  const { title } = req.query
    const pattern = new RegExp(title) 
      console.log(pattern)
        let query = Article.find({title: {$regex: pattern, $options: 'b' }})
          query.exec( (err, article) => {
            if(err){
              res.status(500)
                return next(err)
            }
            return res.status(200).send(article)
          })
})

articleSearchRouter.get('/search/art', (req,res,next) => {
   
  const { title } = req.query
    const pattern = new RegExp(title) 
      console.log(pattern)
      let query = Article.find({title: {$regex: pattern, $options: 'b', }})
        query.where({catagory: 'Art'})
          query.exec( (err, article) => {
            if(err){
              res.status(500)
                return next(err)
            }
                  return res.status(200).send(article)
          })
})
articleSearchRouter.get('/search/business', (req,res,next) => {
  const { title } = req.query
    const pattern = new RegExp(title)
      let query = Article.find({title: {$regex: pattern, $options: 'b', }})
        console.log(pattern)
          query.where({catagory: 'Business'})
            query.exec( (err, article) => {
              if(err){
                res.status(500)
                  return next(err)
              }
                return res.status(200).send(article)
            })
})
articleSearchRouter.get('/search/politics', (req,res,next) => {
  const { title } = req.query
    const pattern = new RegExp(title)
      let query = Article.find({title: {$regex: pattern, $options: 'i', }})
        console.log(pattern)
          query.where({catagory: 'Politics'})
            query.exec( (err, article) => {
              if(err){
                res.status(500)
                  return next(err)
              }
                return res.status(200).send(article)
            })
})

module.exports = articleSearchRouter