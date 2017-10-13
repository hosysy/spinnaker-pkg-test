var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/healcheck', function (req, res) {
  res.send('good!');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
