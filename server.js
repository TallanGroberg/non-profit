const express = require('express')
const path = require("path")
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4444
const secret = process.env.SECRET || 'super secret sly stuffs'
const expressJwt = require('express-jwt')
const cors = require('cors')
app.use(express.static(path.join(__dirname, "client", "build")))


app.use(express.json())


app.use(morgan('dev'))

  app.use('/api', expressJwt({ secret: process.env.SECRET}))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/justice', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,

}, console.log('db is connected...'))



//routes 
app.use('/user', require('./routes/authentication/userRouter.js'))
app.use('/contactbuyer', require('./routes/siteMailers/contactRouter'))
app.use('/contactseller', require('./routes/siteMailers/contactSellerRouter'))
app.use('/feedback', require('./routes/siteMailers/contactFeedbackRouter'))
app.use('/charge', require('./routes/paymentRouter'))

app.use('/article', require('./routes/articleQueries/articleRouter'))



//error handling

app.use( (err,req,res,next) => {
  console.log(err)
  err.name ? res.status(err.status) : null
  res.send({errMsg: err.message})
})



app.get("*", (req, res) => {
  
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`app is live ${PORT}`)
})