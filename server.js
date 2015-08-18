var path        = require('path'),
    express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express();

//var nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);



app.use(express.static(path.join(__dirname, './client')));

app.listen(8000, function(){
  console.log("listening on port 8000");
})
