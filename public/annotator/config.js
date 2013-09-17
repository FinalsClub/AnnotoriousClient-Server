var DoAnnotations = function() {
  var loc = location.pathname;
  loc = loc.split('/');
  console.log(loc);
  title = loc[2];

  var $el = $('#content').annotator();

  $el.annotator('addPlugin', 'Store', {
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
    annotationData: {
      uri: '/#works'+'/'+title
    },

    // This will perform a "search" action rather than "read" when the plugin
    // loads. Will request the last 20 annotations for the current url.
    // eg. /store/endpoint/search?limit=20&uri=http://this/document/only
    // /#works/:title
    loadFromSearch: {
      'uri': '/#works'+'/'+title,
      'limit': 1000,
      'start': 0,
      'end' : 50
    }
  })
  .annotator('addPlugin', 'Markdown')
  // .annotator('addPlugin', 'MarginViewerObjectStore')
  .annotator('addPlugin', 'Touch', {
    force: true
  });
  // return {
  //   annotator: $el.data('annotator'),
  //   uri: '/#works'+'/'+title
  // };
};

DoAnnotations();

//loadOnScreenAnnotations(DoAnnotations());
