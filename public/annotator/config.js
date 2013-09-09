var DoAnnotations = function () {

    var $el = $('#container').annotator();

    $el.annotator('addPlugin', 'Store', {
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
        'limit': 1000,
      }
    });


};

