// index.js - js file for lab 8
// Author: Nathan Kim
// Date: 5 November 2023

// Constants

// Functions
function squareArray(x){
  return (x * x);
}

console.log("What is 1 squared? ", squareArray(1));
console.log("What is 1 squared? ", squareArray(5));

array = [1, 2, 3, 4, 5]
console.log("Array", array);

var result = array.map(squareArray);
console.log("Square of array:", result);

var result = array.map(function(x){
  return (x + 27);
})
console.log("Array + 27:", result);

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
