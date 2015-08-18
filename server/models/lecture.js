
var mongoose = require('mongoose');

var lectureSchema = new mongoose.Schema({
  username: String,
  email: String,
  title: String,
  lecture: String,
  participants: String
})

mongoose.model('lecture', lectureSchema);
