var mongoose = require('mongoose');

module.exports = function(app) {
  // Connect to the database
  mongoose.connect('mongodb://localhost:27017/open_shakespeare', function (err, res) {
    if (err) { 
    console.log ('ERROR connecting to: ' + app.get('db') + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + app.get('db'));
    }
  });

  // Register models
  mongoose.model('Play', require('../schemas/Play'));
  mongoose.model('Annotation', require('../schemas/Annotation'))
};
