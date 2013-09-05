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
        $('#play-nav a[data-id='+self.model.id+']').addClass('selected').siblings().removeClass('selected');
        self.$el.html(self.templateWork(model.toJSON()));
        DoAnnotations();
      },

      error: function(err) {
        console.log("Error fetching work model:"+err);
      }
    });
  }

});
