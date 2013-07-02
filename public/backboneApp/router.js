
var Router = Backbone.Router.extend({

  routes: { 
    "": "index",
    "works/:urititle(/)" : "show",
    "index#about": "about",
    "index#contact": "contact",
    "search/:query(/:page)(/)" : "search",
    "*path" : "notFound"
  },

  index: function() {
    this.navigate('index');
  },

  show: function(urititle) {
    console.log('Rendering the little bugger', urititle);
    appView.workView.model = new Work({
      'uri': urititle
    });
    appView.workView.render();
  },

  about: function() {

  },

  contact: function() {

  },


  search: function(query, page) {
    page = page || 0;
    query = decodeURIComponent(query);
    console.log(query, page);
  },

  notFound: function() {
    console.log("nothing was found")
  }
});
