// index.js - js file for lab 7
// Author: Nathan Kim
// Date: 2 November 2023

// Constants

// Functions

function sortUserName(){
  var userName = window.prompt("Hi, tell me your name!")
  var nameArray = userName.split('');
  var nameArraySort = nameArray.sort();
  var nameSorted = nameArraySort.join('');
  return nameSorted;
}

document.writeln("Better name: ", sortUserName(), "</br>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
