$(document).ready(function(){
  console.log('DOM has loaded!');

  // get values from input fields and call 'POST' /math request
  $('.mathOperators').on('click', 'button', function(){
    var postBody = {
      type: this.id, // defining type based on id
      x: parseInt($('#number1').val()),
      y: parseInt($('#number2').val())
    };
    postMathRequest(postBody);
    console.log(postBody);
  });

  //clear button event handler
  $('#clear').on('click', function(){
    $('#number1').val('');
    $('#number2').val('');
    $('#total').text(' 0');
  });

  // makes ajax request
  function postMathRequest(postBody){
    $.ajax({
      type: 'POST',
      url: '/math',
      data: postBody,
      success: function(response){
        updateTotal(response);
        console.log(response);
      },
      error: function(error){
        console.log('The "/math" ajax post request failed with error: ', error);
      }
    });
  };

  //updating total on the DOM
  function updateTotal(total){
    $('#total').text(' ' + total);
  }


}); //end on click
