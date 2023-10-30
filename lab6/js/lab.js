// index.js - js file for lab 6
// Author: Nathan Kim
// Date: 29 October 2023

const myTransport = ["car", "bus"]
var myMainRide = {
  make: "Hyundai",
  model: "Sonata",
  color: "white",
  year: 2011,
  age: function () {
      return 2023 - this.year;
  }
}

document.writeln("Getting around Santa Cruz:" + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");



// Constants

// Functions

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
