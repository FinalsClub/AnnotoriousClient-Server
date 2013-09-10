//Config App
var AppView = Backbone.View.extend({

  start: function() {
    this.router = new Router();
    Backbone.history.start();
  },

  displayWorks: function () {
    var self = this;

    this.works = new Works();
    this.works.fetch({
      //renders side nav-bar
      success: function(collection){
        self.worksView = new WorksView({
          collection: collection,
          el: '#content'
        });

        self.worksView.render();
      },
      error: function(rsp) { console.log('Error:',rsp); }
    });
  },

  displayWork: function(urititle) {
    if(!this.workView){
      console.log('first work selected');
      this.workView = new WorkView({
        el: '#content'
      });
      this.workView.model = new Work({
        'uri': urititle
      });
      this.workView.render();
    } else {
      console.log('subsequent work selected');
      this.workView.model.updateUri(urititle);
      this.workView.render();
    }
  }

});

//Start App

var appView = new AppView();
$(function(){ appView.start(); });
