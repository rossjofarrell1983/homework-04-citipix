$(function(){

//on click of submit button, run function to change image of backround(changeimage)
    $('#submit-btn').click(changeimage);

//create function to change images when text is input

    function changeimage(event){
      //event.preventDefault() stops the input/information being sent anywhere.
      event.preventDefault();


      //listen for key words typed into #city-type field. Create a var to store matching text for cities (var city).
      //Using the ".toLowerCase" method will make all text entered in #city-type match "city" in "if/else if" statement.

      var city = $('#city-type').val().toLowerCase();

      //".val" assigns what we type to #city-type. if it matches any of the "city" variables we run
      //another function to assign a '.class' to our 'body' defined in our css folder.


      //if the statemnt is true run this code.
        if (city === 'nyc' || city === "new york city" || city === "new york" || city === 'ny'){
      //below we call the attribute 'class' and assign the 'value' of 'nyc'.
        $('body').attr('class', 'nyc');
      //if the above is false move on to code below until the end.
      } else if (city === 'san fran' || city === 'san francisco' || city === 'sf' || city === 'bay area'){
        $('body').attr('class', 'sf'); 
      
      } else if (city === 'los angeles' || city === 'la' || city === 'lax'){
        $('body').attr('class', 'la');
      
      } else if (city === 'sydney' || city === 'syd'){
        $('body').attr('class', 'sydney');
      
      } else if (city === 'austin' || city === 'atx'){
        $('body').attr('class', 'austin');
      //if non of the above is true then use default backround.
      } else {
        $('body').attr('class', '');
      }

      //below clears city-type field after input 

      $('#city-type').val('');

    };

  });