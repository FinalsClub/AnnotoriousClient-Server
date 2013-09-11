var WorkView = Backbone.View.extend({

  events: {
    // 'click .showAnnotations': 'reload'
  },

  templateWork: Handlebars.compile(
    // '<button class="button showAnnotations">Show Annotations</button>' +
    '{{{ html }}}'
  ),

  loadAnnotations: function() {
    if(!this.$annotations){
      this.$annotations = $(document.body).annotator();

      this.$annotations.annotator('addPlugin', 'Store', {
        urls: {
          // Specify URLs matching our API endpoints
          create:  '/annotations',
          read:    '/annotations/:id',
          update:  '/annotations/:id',
          destroy: '/annotations/:id',
          search:  '/annotations/search'
        },

        // The endpoint of the store on your server.
        prefix: '',

        // Attach the uri of the current page to all annotations to allow search.
        // annotationData: {
        //   uri: location.pathname+''+location.hash
        // },

        // This will perform a "search" action rather than "read" when the plugin
        // loads. Will request the last 20 annotations for the current url.
        // eg. /store/endpoint/search?limit=20&uri=http://this/document/only
        loadFromSearch: {
          uri: location.pathname+''+location.hash,
          'limit': 1000,
        }
      });
      this.annotator = this.$annotations.data('annotator');
      console.log(this.annotator);
    } else {
      var options = {
          uri: location.pathname+''+location.hash,
          'limit': 1000,
      };
      this.annotator.plugins.Store.loadAnnotationsFromSearch(options);
      console.log(this.annotator);
    }
  },

  render: function(){
    var self = this;
    this.model.fetch({
      success: function(model, response, options) {
        $('#play-nav a[data-id='+self.model.id+']').addClass('selected').siblings().removeClass('selected');
        self.$el.html(self.templateWork(model.toJSON()));
        self.loadAnnotations();
      },

      error: function(err) {
        console.log("Error fetching work model:"+err);
      }
    });
  }

});
