$(document).ready(function () {

    $("#questions").hide();
    $("#completed").hide();
    $("#counter").hide();
    $("#done").on("click", done);
    $("#start").on("click", start);
    
  /*----------------------------Variables--------------------------------------------*/
  var counterInterval;
  var counter;


  /*---------------------------Functions--------------------------------------------*/
  
  //Start Function
  function start(){
    $(this).hide();
    $("#questions").show();
    $("#counter").show();
    $("#completed").hide();
    
    counter = 30;
    $("#timer").text(counter);
    counterInterval = setInterval(decrement, 1000);
  };

  //Done Function
  function done(){
    clearInterval(counterInterval)
    $(this).hide();
    $("#questions").hide();
    $("#completed").show();
    $("#counter").hide();
  };

  //The decrement function.
  function decrement() {
    counter--;
    $("#timer").text(counter);
    if (counter === 0) {
      done();
    }
  }

  //End of javascript
});