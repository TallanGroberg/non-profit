const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

let now = moment().format("l").split('/').reverse()
    now = now.map(num => Number(num, 10))
    let year = now[0]
    let day = now[1]
    let month = now[2]
    now = [year,month,day].join('')

const articleSchema = new Schema({
  article: {
    type: Array,
  },
  user: {
    type: Schema.Types.ObjectId, ref: "User"
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
    default: now
  },
  displayDate: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  published: {
    Type: Boolean,
    default: false
  }
})



module.exports = mongoose.model('Article', articleSchema)