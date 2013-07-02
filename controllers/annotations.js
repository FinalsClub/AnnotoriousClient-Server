var mongoose = require('mongoose');
var Annotation = mongoose.model('Annotation');

module.exports = {

  api: function (req, res) {
    var query = Annotation.find({'uri': req.query.uri }); 
    res.send(query);
  },

	search: function(req, res) {
    var query = Annotation.find({'uri': req.query.uri }); 

    query.exec(function (err, annotations) {
        if (!err) {
          console.log(annotations);
        return res.send({'rows': annotations });
      } 
      else {
        return console.log(err);
      }
    });
	},
  
	findById: function (req, res) {
    return Annotation.findById(req.params._id, function (err, annotation) {
      if (!err) {
      return res.send(annotation);
      } else {
       return console.log(err);
      }
    });
	},

  list: function (req, res) {
    return Annotation.find(function (err, annotations) {
      if (!err) {
       return res.send(annotations);
      } else {
       return console.log(err);
      }
    });
  },

	addAnnotation: function (req, res) {
    var annotation;
    console.log("POST: ");
    annotation = new Annotation({
      user: "user",
      username: "username",
      text: req.body.text,
      uri: req.body.uri,
      quote: req.body.quote,
      _id: req.body._id,
      permissions: req.body.permissions,
      ranges: req.body.ranges,
      updated: Date.now(),
      created: Date.now(),
    });

    annotation.save(function (err) {
      if (!err) {
       return console.log("Created annotation with uuid: "+ req.body.uuid);
      } else {
       return console.log(err);
      }
    });
    annotation.id = annotation._id;
    return res.send(annotation);
	},

  update: function (req, res) {
    return Annotation.findById(req.params.id, function (err, annotation) {
      annotation.user = "user";
      annotation.username = "username";
      annotation.text = req.body.text;
      annotation.uri = req.body.uri;
      annotation.quote = req.body.quote;
      annotation._id = req.body._id
      annotation.permissions = req.body.permissions;
      annotation.ranges = req.body.ranges;
      annotation.updated = Date.now();
      annotation.created = Date.now();

      return annotation.save(function (err) {
       if (!err) {
         console.log("updated");
       } else {
         console.log(err);
       }
       return res.send(annotation);
      });
    });
  }, 

  delete: function(req, res) {
     return Annotation.findById(req.params._id, function (err, annotation) {
      return annotation.remove(function (err) {
        if (!err) {
          console.log("removed");
          return res.send('');
        } else {
          console.log(err);
        }
      });
    });
  }
};

