module.exports = function(app) {
  var site = require('../controllers/site');
  var works = require('../controllers/works');
  var annotations = require('../controllers/annotations');

  // var passport = require('passport'),
  // passportLocal = require('passport-local'),
  // GoogleStrategy = require('passport-google').Strategy;

  // passport.use(new GoogleStrategy({
  //     returnURL: 'http://localhost:3000/',
  //     realm: 'http://localhost:3000/'
  //   },
  //   function(identifier, profile, done) {
  //     User.findOrCreate({ openId: identifier, firstname: profile.name.givenName, lastname: profile.name.familyName}).done(done);
  //   }
  // ));

  // // Redirect the user to Google for authentication.  When complete, Google
  // // will redirect the user back to the application at
  // //     /auth/google/return
  // app.get('/auth/google', passport.authenticate('google'));

  // // Google will redirect the user to this URL after authentication.  Finish
  // // the process by verifying the assertion.  If valid, the user will be
  // // logged in.  Otherwise, authentication has failed.
  // app.get('/auth/google/return', 
  // passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));

  app.get('/', site.index);
  // app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

  app.get('/api', annotations.api);
  app.get('/annotations/search', annotations.search);
  app.get('/annotations', annotations.list);
  app.get('/annotations/:id', annotations.findById);
  app.post('/annotations', annotations.addAnnotation);
  app.put('/annotations/:id', annotations.update);
  app.delete('annotations/:id', annotations.delete);

  app.get('/works', works.list);
  app.get('/works/:title', works.findByTitle);
  app.post('/works/:id', works.addWork);
};
