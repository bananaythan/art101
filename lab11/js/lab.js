// index.js - js file for lab 11
// Author: Nathan Kim
// Date: 19 November 2023

function sortString(inputString) {
  return inputString.split('').sort().join('');
}

$("#submit").click(function(){
  const userName = $("#user-name").val();
  userNameSorted = sortString(userName);
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
