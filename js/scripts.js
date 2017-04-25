$(function() {
  $(".flashcard").hover(function() {
    // $(this).children().toggle();
    $(this).children(".word").toggle();
    $(this).children(".definition").toggle();
  });
});



//$(".operations").click(function(){
//  $(".operations *").toggle();

//$(".operations h2").toggle();
//  $(".operations p").toggle();
