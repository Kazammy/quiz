$(document).ready(function() {
  
    var total = 0;
  
    // User interface (or front-end) logic: 

    $("form#quiz").submit(function(event) {

    event.preventDefault();
   
    if (!$('[name="q1"]').is(':checked') || !$('[name="q2"]').is(':checked') || !$('[name="q3"]').is(':checked') || !$('[name="q4"]').is(':checked') || !$('[name="q5"]').is(':checked')){

      alert("Kindly answer all questions!");
    }

    else{
  
      
      if ($("[name=q1]").is(':checked')){

        if ($("[name=q1]").val() === 'script') {
          total += 10;
          }
          console.log($("[name=q1]").val());
          console.log(total);
        }

        if ($('[name="q2"]').is(':checked')){
          
          if ($('[name="q2"]').val() === 'java-script') {
            total += 10;
          }
          console.log($("[name=q2]").val());
          console.log(total);
        
        }

        if ($('[name="q3"]').is(':checked')){

          if ($('[name="q3"]').val() === 'html') {
            total += 10;
          }
          console.log($("radio[name=q3]").val());
          console.log(total);
        
        }

        if ($('[name="q4"]').is(':checked')){

          if ($('[name="q4"]').val() === 'container') {
            total += 10;
          }
          console.log($("radio[name=q4]").val());
          console.log(total);
        }

        if ($('[name="q5"]').is(':checked')){

          if ($('[name="q5"]').val() === 'cascading') {
            total += 10;
          }
          console.log($('radio[name=q5]').val());
          console.log(total);
        }
        alert(total);
        $("#quiz").hide();
        $("#score").text("Your score is: "+ total);
        $("#quiz-form-result").show();
     
     }

  });

});
