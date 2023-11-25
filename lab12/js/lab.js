// index.js - js file for lab 12
// Author: Nathan Kim
// Date: 13 November 2023

function sortingHat(inputString){
  var length = inputString.length;
  var mod = length % 4;
  if (mod == 0){
    return "Gryffindor"}
  else if (mod == 1){
    return "Ravenclaw"}
  else if (mod == 2){
    return "Slytherin"}
  else if (mod == 3){
    return "Hufflepuff"}
  }

  $('button').click(function(){
    const name = $("#input").val()
    var house = sortingHat(name)
    $("#output").append('<div class="text"><p>' + "You, " + name + ", have been assigned to " + house + "!" + '</p></div>'); 
  })