
var users = require('./../server/controllers/users.js');
var lectures = require('./../server/controllers/lectures.js');

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

  shareboardapp.post('/addLecture', function(req, res){
    console.log(req.body);
    lectures.addLecture(req, res);
  })

  shareboardapp.get('/showlectures', function(req, res){
    lectures.showlectures(req, res);
    console.log(req.body);
  })
};
