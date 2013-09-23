var express = require('express');
var http = require('http');
var _ = require('underscore');

// Create an app
var app = express();

// Setup app
var appConfig = require('./config/app')(app);

// Include DB
var db = require('./config/db')(app);

// Setup routes
var routes = require('./config/routes')(app);

var updateAnnoOnce = _.once(require('/dataManipulations/updateAnnotations.js'));
updateAnnoOnce();

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening on port ' + app.get('port'));
});

