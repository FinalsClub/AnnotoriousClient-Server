var WorksView = Backbone.View.extend({

  template: Handlebars.compile(
    '<div class="row gray-background">' +
      '<div class="large-12 columns">' +
        '<div class="row">' +
          '<div id="documents" class="large-8 large-offset-2 columns document-list">'+

          '</div>' +
        '</div>' +
      '</div>' +
    '</div>'),

  render: function() {
    this.addAll();
    return this;
  },

  addAll: function() {
    this.$el.html(this.template());
    this.collection.each(this.addOne, this);
    return this;
  },

  addOne: function(work){
    var workView = new WorkNavView({model: work});
    var titleViewInstance = workView.renderTitle().el;
    $('#documents').append(titleViewInstance);
    return this;
  }
});