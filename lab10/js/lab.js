// index.js - js file for lab 10
// Author: Nathan Kim
// Date: 17 November 2023

function generateRandomText() {
  const text = "Hi, I'm Patrick.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

$("#make-convo").click(function(){
  const newText = generateRandomText();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});