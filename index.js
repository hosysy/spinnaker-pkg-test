var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Spinnaker!!#@#@#@#@#@#@#');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!!!!!');
});

app.get('/user3', function (req, res) {
  res.send('Hello user3');
});

app.get('/user/register', function (req, res) {
  res.send('Welcome Register Page!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
