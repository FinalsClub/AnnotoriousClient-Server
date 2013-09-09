
var Router = Backbone.Router.extend({

  routes: {
    "": "index",
    "works/:urititle(/)" : "show"
    // "*path" : "notFound"
  },

  index: function() {
    appView.loadLibrary();
  },

  show: function(urititle) {
    appView.loadText(urititle);
  },

  notFound: function() {
    console.log("nothing was found")
  }
});
