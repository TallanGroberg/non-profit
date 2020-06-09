const express = require('express')
const reportRouter = express.Router()
const Report = require('../models/report')
const Article = require('../models/article')
const User = require('../models/user')


reportRouter.get('/', (req,res,next) => {
  let query = Report.find()
  query.where({resolved: false})
  query.populate('article')
  
  
  query.exec( (err, report) => {
    if(err) return next(err)
    
    // get the user where the report.article.user is then switch that with the report .article.user
    let abuser = report.map(reportObj => {
      return reportObj.article.user
    });
    
    
    let queryUser = User.find()
    queryUser.where({_id: abuser})

    queryUser.exec( (err,user) => {
      console.log('users with abuses',user, )
      if(err) return next(err)
      report.map((reportObj, i,) => {
        reportObj.article.user = user[i]
      })
      
      res.send(report)
    })
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

reportRouter.delete('/:_id', (req,res,next) => {
  Report.findByIdAndDelete(req.params._id, (err, article) => {
    if(err) return next(err)
    res.send(article)
  })
})




module.exports = reportRouter;