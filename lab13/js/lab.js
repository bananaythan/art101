// index.js - js file for lab 13
// Author: Nathan Kim
// Date: 27 November 2023

function fizzBuzz() {
  // heavy inspiration for output from partner
  for (let num = 0; num < 201; num++) {
  $("#output").append(num + " = ")
      if (num % 3 == 0){
          $("#output").append("Fizz")
      };
      if (num % 5 == 0){
          $("#output").append("Buzz")
      };
      if (num % 7 == 0){
          $("#output").append("Boom")
      };
  $("#output").append("!<br>")
  }
  }

  $('#button').click(fizzBuzz())
  