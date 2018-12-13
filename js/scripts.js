

    // Business logic:
 

    function notChecked(){
        
        if (!$('[name=varQuestion1]').is(':checked') || !$('[name=varQuestion2]').is(':checked') || !$('[name=varQuestion3]').is(':checked') || !$('[name=varQuestion4]').is(':checked') || !$('[name=varQuestion5]').is(':checked')){

            return true;

        }       

    }

    function checkAnswers(varQuestion, varAnswer){

        if (varQuestion === varAnswer){
            return true;
        }
    
    }

    // User interface (or front-end) logic: 

$(document).ready(function() {
  
    var total = 0;
 
    $("form#quiz").submit(function(event) {

    event.preventDefault();

    var varQuestion1 = $("input[name='varQuestion1']:checked").val();
    var varQuestion2 = $("input[name='varQuestion2']:checked").val();
    var varQuestion3 = $("input[name='varQuestion3']:checked").val();
    var varQuestion4 = $("input[name='varQuestion4']:checked").val();
    var varQuestion5 = $("input[name='varQuestion5']:checked").val();

   
    if(notChecked())
    {
        alert("Kindly answer all questions!");
    }

    else{

        
        if (checkAnswers(varQuestion1, "script")) {
            total += 10;
        }

        if (checkAnswers(varQuestion2, "java-script")) {
            total += 10;
        }
      
        if (checkAnswers(varQuestion3, "html")) {
            total += 10;
        }
        
        if (checkAnswers(varQuestion4, "container")) {
            total += 10;
        }

        if (checkAnswers(varQuestion5, "cascading")) {
            total += 10;
        }
        
        $("#quiz").hide();
        $("#score").text("Your score is: "+ total);
        $("#quiz-form-result").show();
     
      }

  });

});
