var WorkNavView = Backbone.View.extend({
  tagName: 'a',

  template: Handlebars.compile(
    '<a href="#works/{{{uri}}}" class="button secondary expand document-button-1">' +
      '{{{title}}}&nbsp;&nbsp;<div class="arrow-on-button">' +
        '<b>&#8250;</b>' +
      '</div>' +
    '</a>'),

  renderTitle: function() {
    this.$el.html(this.template(this.model.toJSON()));
    // legacy code below from BardGenius:
      // this.$el.attr('href', '#works/'+this.model.et('uri'));
      // this..$el.attr('data-id', this.mel.id);
      // t this.$el.text(this.model.get('title'));

    return this;
  }
});
