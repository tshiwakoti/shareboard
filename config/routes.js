var settings = require('./settings.json')
var sendgrid  = require('sendgrid')(settings.mailer.sendgrid);

var users = require('./../server/controllers/users.js');
var lectures = require('./../server/controllers/lectures.js');

module.exports = function(shareboardapp){

  shareboardapp.post('/addUser', function(req, res){
  //  console.log(req.body);
    users.addUser(req, res);
  })

  shareboardapp.post('/show', function(req, res){
    users.show(req, res);
    // console.log('in routes');
    // console.log(req.body);
  })

  shareboardapp.post('/addLecture', function(req, res){
    console.log('in server routes');
    console.log(req.body);

    var emailData = req.body;
    sendtest(emailData);
    lectures.add(req,res);
     })

  shareboardapp.post('/showlectures', function(req, res){
    lectures.showlectures(req, res);
  })

  shareboardapp.post('/sendRequest', function(req, res){
    console.log('Testing Send Request');
    console.log(req.body);


    var participants = req.body.participants;
    var author = req.body.presenter;
    var title = req.body.title;
    var url = req.body.current_url;


    console.log(participants);
    console.log(author);
    console.log(title);
    console.log(url);


    var emailArray = new Array();
    emailArray = participants.split(",");

    console.log("Email list");
    console.log(emailArray);

    var payload   = {
         to      : emailArray,
         from    : 'shareboard@outlook.com',
         subject :  'SHAREBOARD:  ' + author + ' has started a presentation',
         text    :  'Your presenter ' + author + ' has started a presentation. "' + title + '".  You can check the presentation at following url :  ' + url
       }

       sendgrid.send(payload, function(err, json) {
         if (err) { console.error(err); }
         console.log(json);
       });
  })


  var sendtest = function (emailData){
    console.log('testing email');
    console.log(emailData);

    var participants = emailData.participants;

    var emailArray = new Array();
    emailArray = participants.split(",");

    console.log("Email list");
    console.log(emailArray);

    var payload   = {
         to      : emailArray,
         from    : 'shareboard@outlook.com',
         subject : 'Email from Shareboard.' + emailData.title,
         text    :  emailData.body
       }

       sendgrid.send(payload, function(err, json) {
         if (err) { console.error(err); }
         console.log(json);
       });

  }


 };
