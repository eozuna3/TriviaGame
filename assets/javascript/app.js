$(document).ready(function () {

  $("#questionsContainer").hide(); 
  /*----------------------------Variables--------------------------------------------*/
  // Creating variables for use in javascript


  $("#start").on("click", function(){
    $(this).hide();
    $("#questionsContainer").show();
  });
});