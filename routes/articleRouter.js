const express = require('express')
const articleRouter = express.Router()
const Article = require('../models/article')

console.log('article router ...')

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


module.exports = articleRouter