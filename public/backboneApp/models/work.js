var Work = Backbone.Model.extend({

  urlRoot: '/works/',

  idAttribute: 'uri',

  updateUri: function (uri) {
    this.set('uri', uri);
    this.set('uriTitle', uri);
  }

});