var express = require('express');

var app = express();

//assign ejs engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
  res.render('contact');
});

//listsen at port 3000 for pages, server
app.listen(3000, function(){
  console.log('Application running on localhost on port 3000');
});
