$( document ).ready(function(){
  
  var scrollbarHeight = $( "footer" ).offset().top - $( ".top-bar-background" ).height() - $( ".scrollbar-up" ).height() - 16;
    
  $( "#document-view-scrollbar" ).css({"height":scrollbarHeight + "px", "top":$( ".top-bar-background" ).height() + "px"});
  $( "#scrollbar-canvas" ).attr( "height", scrollbarHeight - $( ".scrollbar-down" ).height() - 18);
  
  addScrollBarHighlight(30, 5, "#1F91C1");
  
});

function addScrollBarHighlight(pos, len, color)
{
  var scrollbar = document.getElementById( "scrollbar-canvas" );
  var scrollCtx = scrollbar.getContext("2d");
  var top = pos * $( "#scrollbar-canvas" ).height();
  
  scrollCtx.fillStyle = color;
  scrollCtx.fillRect( 0,pos,33,len );
}