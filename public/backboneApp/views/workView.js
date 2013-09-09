var WorkView = Backbone.View.extend({

  el: '#container',

  events: {
    // 'click .showAnnotations': 'showAnnotations'
  },

  templateWork: Handlebars.compile(
    // '<button class="button showAnnotations">Show Annotations</button>' +
    '{{{ html }}}'
  ),

  showAnnotations: function() {
    if(this.loaded && !this.annotated){
      this.annotated = true;
      DoAnnotations(this.el);
    }
  },

  render: function(){
    this.$el.empty();
    var self = this;
    this.model.fetch({
      success: function(model, response, options) {
        // $('#play-nav a[data-id='+self.model.id+']').addClass('selected').siblings().removeClass('selected');
        self.loaded = true;
        self.$el.html(self.templateWork(model.toJSON()));
        self.showAnnotations();
      },

      error: function(err) {
        console.log("Error fetching work model:"+err);
      }
    });
  }

});
