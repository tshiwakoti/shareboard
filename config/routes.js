var settings = require('./settings.json')
var sendgrid  = require('sendgrid')(settings.mailer.sendgrid);

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

  shareboardapp.post('/send', function(req, res) {
    console.log(req.body)
    var url = req.body.content.url
    var notes = req.body.content.notes
    console.log(notes)

    if(notes == null) {
      var text = 'Please read this notes on url: ' + url
    } else {
      var text = 'Please read this notes on url: ' + url + ' ' + '\n <b>Lectures:</b> ' + notes
    }

    var payload   = {
      to      : 'tshiwakoti@outlook.com',
      from    : 'shareboard@outlook.com',
      subject : 'You better read this notes.',
      text    :  text
    }

    sendgrid.send(payload, function(err, json) {
      if (err) { console.error(err); }
      console.log(json);
    });
  })
};
