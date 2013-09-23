var mongoose = require('mongoose');
var _ = require('underscore');

mongoose.connect(process.env.MONGOLAB_URI, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ');
    }
});

  // Register models
mongoose.model('Annotation', require('../schemas/Annotation'));

var Annotation = mongoose.model('Annotation');

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
