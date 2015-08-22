
var mongoose = require('mongoose');

var lectureSchema = new mongoose.Schema({
  author: String,
  title: String,
  lecture: String,
  participants: String,
  created_at: {type: Date, default: Date.now }
})

mongoose.model('lecture', lectureSchema);
