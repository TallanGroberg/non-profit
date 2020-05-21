const express = require('express')
const reportRouter = express.Router()
const Report = require('../models/report')
const Article = require('../models/article')

reportRouter.get('/', (req,res,next) => {
  let query = Report.find()
  query.where({resolved: false})
  query.populate('article')
  query.exec( (err, report) => {
    if(err) return next(err)
    res.send(report)
  })
})

reportRouter.post('/', (req,res,next) => {
  console.log(req.body.article)
  
  
    const newReport = new Report(req.body)

    
      newReport.save( (err, report) => {
        
        if(err) {  
          return next(err)
        }
        res.send(report)
      })
    
  
  
})



module.exports = reportRouter;