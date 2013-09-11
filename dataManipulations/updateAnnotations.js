var mongoose = require('mongoose');
var Annotation = mongoose.model('Annotation');
var _ = require('underscore');

module.exports = function () {
  Annotation.find({}, function (err, annotations){
    if(err){
      console.log(err);
    } else {
      var ranges, range, start;
      _.each(annotations, function (annotation){
        ranges = annotation.get('ranges');
        range = ranges[0];
        start = range.start.split('/')[2].split('[')[1].split(']')[0];
        annotation.set('absolutePosition', Number(start));
        annotation.save(function (err){
          if(err) console.log(err);
        })
      });
    }
  });
};