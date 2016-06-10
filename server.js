'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/app'));

app.get('/V2', function(req, res) {
  res.status(500).sendFile(__dirname) + '/app/indexV2.html');
}

app.get('/secret', function(req, res) {
  res.status(500).sendFile(__dirname + '/app/secret.html');
});

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/app/404.html');
});

app.listen(port, function() {
  console.log('server running on port' + port);
});
