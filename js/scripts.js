$(document).ready(function(){

  $(".click-dog").click(function() {
    $("#dog-word").slideToggle();
    $("#dog-image").slideToggle();
  });

  $(".click-cat").click(function() {
    $("#cat-word").slideToggle();
    $("#cat-image").slideToggle();
  });

  $(".click-bunny").click(function() {
    $("#bunny-word").slideToggle();
    $("#bunny-image").slideToggle();
  });

  $(".click-fish").click(function() {
    $("#fish-word").slideToggle();
    $("#fish-image").slideToggle();
  });

  $("button.change-text-dark").click(function() {
    $("body").addClass("dark-background");
  });

  $("button.change-text-light").click(function() {
    $("body").removeClass();
  });
});