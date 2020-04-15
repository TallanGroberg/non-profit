const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')
const articleSchema = new Schema({
  article: {
    type: Array,
  },
  user: {
    type: String,
},
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  displayImage: {
    type: String,
  },
  catagory: {
    type: String,
    enum: ['Art', 'Politics', 'Business',]
  },
  likes: {
    type: Number,
    default: 0,
  },
  date: {
    type: Number,
    default: Date.now()
  }
})

module.exports = mongoose.model('Article', articleSchema)