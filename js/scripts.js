$(document).ready(function() {
  
    var total = 0;
  
    // User interface (or front-end) logic: 

    $("form#quiz").submit(function(event) {

    event.preventDefault();
   
    if (!$('[name="q1"]').is(':checked') || !$('[name="q2"]').is(':checked') || !$('[name="q3"]').is(':checked') || !$('[name="q4"]').is(':checked') || !$('[name="q5"]').is(':checked')){

      alert("Kindly answer all questions!");
    }

    else{

        q1 = $("input[name='q1']:checked").val();
        if (q1 === 'script') {
            total += 10;
        }

        q2 = $("input[name='q2']:checked").val();
        if (q2 === 'java-script') {
            total += 10;
        }
      
        q3 = $("input[name='q3']:checked").val();
        if (q3 === 'html') {
            total += 10;
        }
        
        q4 = $("input[name='q4']:checked").val();
        if (q4 === 'container') {
            total += 10;
        }

        q5 = $("input[name='q5']:checked").val();
        if (q5 === 'cascading') {
            total += 10;
        }
        
        $("#quiz").hide();
        $("#score").text("Your score is: "+ total);
        $("#quiz-form-result").show();
     
      }

  });

});
