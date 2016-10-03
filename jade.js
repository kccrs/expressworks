var express = require('express');
var app = express();
// var path = require('path');
app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});
// app.set('views', path.join(__dirname, 'templates'));


app.listen(process.argv[2] || 3000);
