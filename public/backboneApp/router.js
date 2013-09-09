
var Router = Backbone.Router.extend({

  routes: {
    "": "index",
    "works/:urititle(/)" : "show",
    "*path" : "notFound"
  },

  index: function() {
    this.navigate('index');
  },

  show: function(urititle) {
    appView.displayWork(urititle);
  },

  notFound: function() {
    console.log("nothing was found")
  }
});
