var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//Play Model
var Play = new Schema({
  'title': String,
  'html': String,
  'uriTitle': String
});

module.exports = Play;
