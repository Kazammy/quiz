$(document).ready(function() {
  
  var total = 0;

  /*
  
  $("input:radio[name=q1]").change(function () {

     if ($('[name="q1"]').is(':checked')){
      
      if(this.value == 'script' ) {
        
        total += 10;
      }

     }
        
    $("#score").text("Running Score: "+ total);

  });


  $("input:radio[name=q2]").change(function () { 

    if ($('[name="q2"]').is(':checked')){
      if(this.value == 'java-script') {
        total += 10;
      }
    }
    
    $("#score").text("Running Score: "+ total);


  });


  $("input:radio[name=q3]").change(function () {
    if ($('[name="q3"]').is(':checked')){
      if(this.value == 'html') {
        total += 10;
      }
    }
    
    $("#score").text("Running Score: "+ total);


  });


  $("input:radio[name=q4]").change(function () {

    if ($('[name="q4"]').is(':checked')){
      if(this.value == 'container') {
        total += 10;
      }
    }
    
    $("#score").text("Running Score: "+ total);


  });


  $("input:radio[name=q5]").change(function () {

    if ($('[name="q5"]').is(':checked')){
      if(this.value == 'cascading') {
        total += 10;
      }
    }
    
    $("#score").text("Running Score: "+ total);


  });
*/

  $("button#green").click(function() {

    if (!$('[name="q1"]').is(':checked') || !$('[name="q2"]').is(':checked') || !$('[name="q3"]').is(':checked') || !$('[name="q4"]').is(':checked') || !$('[name="q5"]').is(':checked')){

      alert("Kindly answer all questions!");

   }
    else{


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

      alert(total);

  }


  });

}); 
