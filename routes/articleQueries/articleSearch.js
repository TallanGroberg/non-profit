const express = require('express')
const articleSearchRouter = express.Router()
const Article = require('../../models/article')


articleSearchRouter.get('/search/recent', (req,res,next) => {
  const { title } = req.query
    const pattern = new RegExp(title) 

    let query = Article.find()
    query.populate('user')
        query.where({published: true, title: {$regex: pattern, $options: 'b' }})
          query.exec( (err, article) => {
            if(err){
              res.status(500)
                return next(err)
            }
            return res.status(200).send(article)
          })
})
articleSearchRouter.get('/search/trending', (req,res,next) => {
  const { title } = req.query
    const pattern = new RegExp(title) 
    let query = Article.find()
      query.populate('user')
        query.where({published: true, title: {$regex: pattern, $options: 'b' }})
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
    let query = Article.find()
    query.populate('user')
      query.where({published: true, 
                    title: {$regex: pattern, $options: 'b' }, 
                      catagory: 'Art' })
        
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
      let query = Article.find()
      query.populate('user')
      query.where({published: true, 
                        catagory: 'Business',
                          title: {$regex: pattern, $options: 'b', }
                        })
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
      let query = Article.find()
      query.populate('user')
      query.where({
                      published: true,
                        catagory: 'Politics',
                          title: {$regex: pattern, $options: 'b', },
                      })
            query.exec( (err, article) => {
              if(err){
                res.status(500)
                  return next(err)
              }
                return res.status(200).send(article)
            })
})


//.populate will get the information from an _id

module.exports = articleSearchRouter