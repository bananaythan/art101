// index.js - js file for lab 9
// Author: Nathan Kim
// Date: 12 November 2023



$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});
