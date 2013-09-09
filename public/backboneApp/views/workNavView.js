var WorkNavView = Backbone.View.extend({
  tagName: 'a',

  renderTitle: function() {
    this.$el.attr('href', '#works/'+this.model.get('uri'));
    this.$el.attr('data-id', this.model.id);
    this.$el.text(this.model.get('title'));

    return this;
  }
});
