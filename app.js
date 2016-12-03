var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

//assign ejs engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//includes static files (js, css, etc)
app.use(express.static(__dirname + '/public'));

//bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res, next){
  res.render('contact');

});

app.post('/', function(req, res, next) {
  var nodemailer = require('nodemailer');

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: //enter transporter,
        pass: //enter password
      }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      to:  // list of receivers
      subject: 'Kool-Aid Request', // Subject line
      text: 'Please send me some Kool-Aid', // plaintext body
      html: 'Please send me some Kool-Aid<br>' + req.body.email + '<br>Name: ' + req.body.firstname + " " + req.body.lastname // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response + req.body.email);
  });
})
//listsen at port 3000 for pages, server
app.listen(3000, function(){
  console.log('Application running on localhost on port 3000');
});
