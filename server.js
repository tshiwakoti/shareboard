var path        = require('path'),
    express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express();
    port        = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);



app.use(express.static(path.join(__dirname, './client')));

//SOCKETS
var server = app.listen(port, function(){
  console.log("listening on port 8000");
})

var io = require('socket.io').listen(server)

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  socket.on('new_user', function (data){
      socket.broadcast.emit('addnewuser', {response: data});
  });

  socket.on('msg', function (data){
    console.log('Your societ data is:', {response: data});
    socket.broadcast.emit('newmsg', {response: data});
  });

  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
});
