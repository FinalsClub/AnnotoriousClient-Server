var express = require('express');
var path = require('path');
var stylus = require('stylus');
var nib = require('nib');

// CORS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'Content-Length, Content-Type, Location');
    res.header('Access-Control-Allow-Headers', 'Content-Length, Content-Type, X-Annotator-Auth-Token, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Max-Age', '86400');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
     res.send(200);
    }
    else {
     next();
    }
};

module.exports = function(app) {
  // Configuration for all environments
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.set('views', path.join(__dirname, '..', 'views'));
  app.engine('html', require('ejs').renderFile);
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
  app.use(express.cookieParser('SecretAgentShakespeare'));
  app.use(express.session());
  app.use(app.router);
  app.use(stylus.middleware({
    src: path.join(__dirname, '../views/styles'),
    dest: path.join(__dirname, '../public'),
    compile: function compile(str, path) {
      return stylus(str)
       .set('filename', path)
       .set('compress', true)
       .use(nib())
       .import('nib');
    }
  }));
  app.use(express.static(path.join(__dirname, '..', 'public')));

  if (app.get('env') === 'development') {
    app.set('db', 'mongodb://localhost:27017/open_shakespeare');
    app.use(express.errorHandler());
  }
  else if (app.get('env') === 'production') {
    app.set('db', process.env.MONGOLAB_URI);
  }
};
