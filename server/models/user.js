
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  usercheck: String
})

mongoose.model('user', userSchema);
