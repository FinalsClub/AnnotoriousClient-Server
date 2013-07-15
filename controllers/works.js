var mongoose = require('mongoose');
var Play = mongoose.model('Play');

module.exports.list = function(req, res){
  //only returns title and id
  Play.find({}, function (err, plays) {
    var works = [];
    plays.forEach(function(play) {
      works.push({'title': play.title, '_id': play._id, 'uri': play.uriTitle})
    })
    res.json(works);
   });
};

module.exports.findByTitle = function(req, res) {
  var query = Play.findOne({"uriTitle": req.params.title}, 'uriTitle html', function(err, resp) {
    res.json(resp);
  });
};

module.exports.addWork = function(req, res) {
  res.send("I guess Shakespeare is still at it despite the odds! Sorry, you cannot add your own literature at this time");
};
