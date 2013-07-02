var WorkView = Backbone.View.extend({

  templateWork: Handlebars.compile(
    '<button class="btn" onClick="document.location.reload(true)">Show Annotations</button>' +
    '{{{ html }}}'
  ),

  render: function(){
    var self = this;
    this.model.fetch({
      success: function(model, response, options) {
        console.log(response);
        self.$el.html(self.templateWork(model.toJSON()));
      },

      error: function(err) {
        console.log("Error fetching work model:"+err);
      }
    });
  }

});
