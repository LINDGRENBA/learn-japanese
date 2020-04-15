$(document).ready(function(){

  $(".click-dog").click(function() {
    $("#dog-word").toggle();
    $("#dog-image").toggle();
  });

  $(".click-cat").click(function() {
    $("#cat-word").toggle();
    $("#cat-image").toggle();
  });

  $(".click-bunny").click(function() {
    $("#bunny-word").toggle();
    $("#bunny-image").toggle();
  });

  $(".click-fish").click(function() {
    $("#fish-word").toggle();
    $("#fish-image").toggle();
  });
});