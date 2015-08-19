var path        = require('path'),
    express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express();

var nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);



app.use(express.static(path.join(__dirname, './client')));

//SOCKETS












//mail check

// var smtpTransport = nodemailer.createTransport("SMTP",{
// service: "Outlook",
// auth: {
// user: "shareboard@outlook.com",
// pass: "Mean1111"
// }
// });
//
//
//
// // app.get('/',function(req,res){
// //   res.sendfile('index.html');
// // });
// app.get('/send',function(req,res){
//   var mailOptions={
//     to : req.query.to,
//     subject : req.query.subject,
//     text : req.query.text
//   }
//   console.log(mailOptions);
//   smtpTransport.sendMail(mailOptions, function(error, response){
//     if(error){
//       console.log(error);
//       res.end("error");
//     }else{
//       console.log("Message sent: " + response.message);
//       res.end("sent");
//     }
//   });
// });


//until here






var server = app.listen(8000, function(){
  console.log("listening on port 8000");
})

var io = require('socket.io').listen(server)

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  socket.on('new_user', function (data){
      socket.broadcast.emit('addnewuser', {response: data});
  });

  socket.on('msg', function (data){
    socket.broadcast.emit('newmsg', {response: data});
  });

  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  // console.log({response: data});
});
