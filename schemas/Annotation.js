var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Annotation Ranges
var Ranges = new Schema({
    start: { type: String, required: true },
    startOffset: { type: Number, required: false },
    end: { type: String, required: true},
    endOffset: { type: Number, required: false },
    _id: { type: String, required: false },
});

// Annotation Model
var Annotation = new Schema({
    id: { type: String, required: false },
    user: { type: String, required: false },
    username: { type: String, required: false },
    absolutePosition: { type: Number},
    text: { type: String, required: false },
    uri: { type: String, required: false },
    quote: { type: String, required: false },
    _id: { type: String, required: false },
    permissions: {
      read: [String],
      admin: [String],
      update: [String],
      delete: [String]
    },
    ranges: [Ranges],
    created: { type: Date, default: Date.now() },
    updated: { type: Date, default: Date.now() },
});

module.exports = Annotation;