
//var nodemailer = require('nodemailer');


//requires when connecting clientside to serverside.
//require mongoose file and route file from configs


var transporter = nodemailer.createTransport({
    service: 'Outlook',
    auth: {
        user: 'email add here',
        pass: 'pass here'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <tshiwakoti@outlook.com>', // sender address
    to: 'tshiwakoti@outlook.com, abhirockon@gmail.com.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});
