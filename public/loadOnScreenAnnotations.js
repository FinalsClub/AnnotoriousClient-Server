var loadOnScreenAnnotations = function (annotate){
  var topDiv = 0;
  var prevTop = topDiv;
  var bottomDiv;
  var text = $('#content').children();
  var lastScrollTop = 0;


  var isAbove = function (elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom < docViewTop;
  };

  var isBelow = function (elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemTop > docViewBottom;
  };

  var setBottom = function (){
    var prev;
    var past = false;
    for(var i = topDiv; i < text.length; i ++){
      if(!past){
        if(isBelow(text[i])){
          bottomDiv = prev;
          past = true;
        } else {
          prev = i;
        }
      } else {
        break;
      }
    }
  };

  var setTop = function (){
    var prev;
    var past = false;
    for(var i = bottomDiv; i >= 0; i --){
      if(!past){
        if(isAbove(text[i])){
          topDiv = prev;
          past = true;
        } else {
          prev = i;
        }
      } else {
        break;
      }
    }
  };

  var load = function(){
    var options = {
      'uri': annotate.uri,
      'limit': 1000,
      // 'start': topDiv,
      'end': bottomDiv + 20
    };
    annotate.annotator.plugins.Store.dumpAnnotations();
    annotate.annotator.plugins.Store.loadAnnotationsFromSearch(options);
    console.log('logging', annotate.annotator);
  };

  var debLoad = _.debounce(load, 500);

  setBottom();

  $(window).scroll(function(event){
    setBottom();
    setTop();
    debLoad();
  });
};