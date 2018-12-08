$(document).ready(function() {
  
    var total = 0;
  
    $("form#quiz").submit(function(event) {

		event.preventDefault();

    if ($('[name="q1"]').is(':checked')){

      if ($('[name="q1"]').val() === 'script') {
        total += 10;
      
        }
      }

      if ($('[name="q2"]').is(':checked')){
         
        if ($('[name="q2"]').val() === 'java-script') {
          total += 10;
        }
       
      }

      if ($('[name="q3"]').is(':checked')){

        if ($('[name="q3"]').val() === 'html') {
          total += 10;
        }
       
      }

      if ($('[name="q4"]').is(':checked')){

        if ($('[name="q4"]').val() === 'container') {
          total += 10;
        }
      }

      if ($('[name="q5"]').is(':checked')){

        if ($('[name="q5"]').val() === 'cascading') {
          total += 10;
        }
      }

      $("#quiz").hide();
      $("#score").text("Your score is: "+ total);
      $("#quiz-form-result").show();

  });

});
