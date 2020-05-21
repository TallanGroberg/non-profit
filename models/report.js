const mongoose = require('mongoose')
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');

const reportSchema = new Schema({
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
    required: true,
    unique: true,
  },
  reportedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  resolved: {
    type: Boolean,
    required: true,
    default: false,
  }
})

reportSchema.plugin(uniqueValidator)

module.exports = mongoose.model("Report", reportSchema)
