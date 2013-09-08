//Config App
var AppView = Backbone.View.extend({

  start: function() {
    this.router = new Router();
    Backbone.history.start();
  },

  loadLibrary: function () {
    var self = this;

    this.works = new Works();
    this.works.fetch({
      //renders text list
      success: function(){
        self.worksView = new WorksView({
          collection: self.works,
          el: $('#container')
        });

        self.worksView.render();
      },
      error: function(rsp) { console.log('Error:',rsp); }
    });
  },

  loadText: function (urititle) {
    this.workView = new WorkView({
      el: '#container'
    });
    this.workView.model = new Work({
      'uri': urititle
    });
    this.workView.render();
  }

});

//Start App

var appView = new AppView();
$(function(){ appView.start(); });
