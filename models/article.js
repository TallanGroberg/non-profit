const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    enum: ['Art', 'Politics', 'Business', 'Trending', 'Recent']
  },
  likes: {
    type: Number,
    default: 0,
  }
})

module.exports = mongoose.model('Article', articleSchema)