var loadOnScreenAnnotations = function (annotator){
  var topDiv = 0;
  var prevTop = topDiv;
  var bottomDiv;
  var preBottom
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

  setBottom();

  $(window).scroll(function(event){
    console.log(topDiv, bottomDiv);
    setBottom();
    setTop();
    // var st = $(this).scrollTop();
    // var prev;
    // if (st > lastScrollTop){
    //   // downscroll
    //   setBottom();
    // } else {
    //   // upscroll
    //   setTop();
    // }
    // lastScrollTop = st;
  });
};