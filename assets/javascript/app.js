$(document).ready(function () {

  $("#questions").hide();
  $("#completed").hide();
  $("#counter").hide();
  /*----------------------------Variables--------------------------------------------*/
  // Creating variables for use in javascript

  /*---------------------------Functions--------------------------------------------*/
  
  //Start Function
  $("#start").on("click", function(){
    $(this).hide();
    $("#questions").show();
    $("#completed").show();
    $("#counter").show();
  });


});