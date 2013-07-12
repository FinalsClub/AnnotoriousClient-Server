var mongoose = require('mongoose');

module.exports = function(app) {
  // Connect to the database
  mongoose.connect(process.env('MONGOLAB_URI'));

  // Register models
  mongoose.model('Play', require('../schemas/Play'));
  mongoose.model('Annotation', require('../schemas/Annotation'))
};
