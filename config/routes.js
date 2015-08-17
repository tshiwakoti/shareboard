
var users = require('./../server/controllers/users.js');

module.exports = function(shareboardapp){

  shareboardapp.post('/addUser', function(req, res){
    console.log(req.body);
    users.addUser(req, res);
  })

  shareboardapp.post('/show', function(req, res){
    users.show(req, res);
    // console.log('in routes');
    // console.log(req.body);
  })

};
