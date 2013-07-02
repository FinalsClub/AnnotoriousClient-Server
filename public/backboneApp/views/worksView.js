var WorksView = Backbone.View.extend({

  render: function() {
    this.addAll();
    return this;
  },

  addAll: function() {
    this.collection.forEach(this.addOne, this);
    return this;
  },

  addOne: function(work){
    var workView = new WorkNavView({model: work});
    var titleViewInstance = workView.renderTitle().el;
    this.$el.append(titleViewInstance);
    return this;
  }
});