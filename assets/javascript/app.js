$(document).ready(function () {

  $("#questions").hide();
  $("#completed").hide();
  $("#counter").hide();
  $("#done").on("click", done);
  $("#start").on("click", start);


  /*----------------------------Variables--------------------------------------------*/
  var counterInterval;
  var counter;
  var numberCorrect = 0;
  var numberIncorrect = 0;
  var numberUnanswered = 0;


  /*---------------------------Functions--------------------------------------------*/

  //Start Function
  function start() {
    $(this).hide();
    $("#questions").show();
    $("#counter").show();
    $("#completed").hide();
    $("#music").attr("src", "assets/music/E.R..mp3")

    counter = 120;
    $("#timer").text(counter);
    counterInterval = setInterval(decrement, 1000);
  };

  //Done Function
  function done() {
    clearInterval(counterInterval)
    $("#done").hide();
    $("#questions").hide();
    $("#completed").show();
    $("#counter").hide();

    submitAnswers();
    $("#numberCorrect").text(numberCorrect);
    $("#numberIncorrect").text(numberIncorrect);
    $("#numberUnanswered").text(numberUnanswered);
  };

  //The decrement function.
  function decrement() {
    counter--;
    $("#timer").text(counter);
    if (counter === 0) {
      done();
    }
  }

  //Determine what to do with selected values
  function valueDecision(value) {
    if (value === "true") {
      numberCorrect++;
    } else if (value === "false") {
      numberIncorrect++;
    } else {
      numberUnanswered++;
    }
  }

  //Submit Answer Function
  function submitAnswers() {
    var question1 = $("input[name='question1']:checked").val();
    console.log(question1);
    valueDecision(question1);
    var question2 = $("input[name='question2']:checked").val();
    console.log(question2);
    valueDecision(question2);
    var question3 = $("input[name='question3']:checked").val();
    console.log(question3);
    valueDecision(question3);
    var question4 = $("input[name='question4']:checked").val();
    console.log(question4);
    valueDecision(question4);
    var question5 = $("input[name='question5']:checked").val();
    console.log(question5);
    valueDecision(question5);
    var question6 = $("input[name='question6']:checked").val();
    console.log(question6);
    valueDecision(question6);
    var question7 = $("input[name='question7']:checked").val();
    console.log(question7);
    valueDecision(question7);
    var question8 = $("input[name='question8']:checked").val();
    console.log(question8);
    valueDecision(question8);
    var question9 = $("input[name='question9']:checked").val();
    console.log(question9);
    valueDecision(question9);
    var question10 = $("input[name='question10']:checked").val();
    console.log(question10);
    valueDecision(question10);

    console.log(numberCorrect + ", " + numberIncorrect + ", " + numberUnanswered);
  };


  //End of javascript
});