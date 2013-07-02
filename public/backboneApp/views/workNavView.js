var WorkNavView = Backbone.View.extend({

  events: {
    'click .titleNav': "renderWork",
  },

  templateTitle: Handlebars.compile('<button class="titleNav btn btn-link">{{ title }}</button></n>'),

  renderTitle: function() {
    this.$el.append(this.templateTitle(this.model.toJSON()));
    return this;
  },

  renderWork: function(){
    // debugger;
    appView.router.navigate('/works/' + this.model.attributes.uri, {trigger: true});  
  }
});
