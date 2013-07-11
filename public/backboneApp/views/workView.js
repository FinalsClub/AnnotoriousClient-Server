var WorkView = Backbone.View.extend({

  events: {
    'click .showAnnotations': 'reload'
  },

  templateWork: Handlebars.compile(
    '<button class="button showAnnotations">Show Annotations</button>' +
    '{{{ html }}}'
  ),

  reload: function() {
    document.location.reload(true)
  },

  render: function(){
    var self = this;
    this.model.fetch({
      success: function(model, response, options) {
        console.log(self.model);
        $('#play-nav a[data-id='+self.model.id+']').addClass('selected').siblings().removeClass('selected');
        self.$el.html(self.templateWork(model.toJSON()));
      },

      error: function(err) {
        console.log("Error fetching work model:"+err);
      }
    });

  }

});
