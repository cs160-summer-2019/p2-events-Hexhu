$(document).ready(() => {
  $("#btn-stop").click(function () { 
    clearInterval(addButtonEvent);
  });
  
  var addButtonEvent = setInterval(() => {
    $(".shape-container").append("<div class='p2-circle bg-blue'>");
  }, 1000); // Every 1000ms
});