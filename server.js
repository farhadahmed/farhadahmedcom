'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/app'));

app.get('/*', function(req, res) {
  res.status(404).send('This page could not be found.');
});

app.listen(port, function() {
  console.log('server running on port' + port);
});
