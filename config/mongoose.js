
var mongoose = require('mongoose');
var fs = require('fs');


// connect to the database
// mongoose.connect('mongodb://localhost/shareboards_test');
mongoose.connect(process.env.MONGOLAB_URI);

// specify the path to all of the models
var models_path = __dirname + '/../server/models'
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})
