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
    if(this.loaded && !this.annotation){
      this.annotation = this.$el.annotator();
      this.annotation.annotator('addPlugin', 'Store', {
        urls: {
          // Specify URLs matching our API endpoints
          create:  '/annotations',
          read:    '/annotations/:id',
          update:  '/annotations/:id',
          destroy: '/annotations/:id',
          search:  '/annotations/search'
        },

        // TODO: Add the Annotator Markdown plugin

        // The endpoint of the store on your server.
        prefix: '',

        // Attach the uri of the current page to all annotations to allow search.
        annotationData: {
          uri: location.pathname+''+location.hash
        },

        // This will perform a "search" action rather than "read" when the plugin
        // loads. Will request the last 20 annotations for the current url.
        // eg. /store/endpoint/search?limit=20&uri=http://this/document/only
        loadFromSearch: {
          uri: location.pathname+''+location.hash,
          'limit': 20,
        }
      });
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
