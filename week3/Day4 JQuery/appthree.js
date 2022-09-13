$(function () {
  $("<p>Cheese</p>").insertAfter(".inner");
  $("<h1>Hello World!</h1>").insertBefore(".inner");
  $(".newContext").after("<h1>Hello World!</h1>");
  $(".inner").before("<p>Hello Everyone</p>");
  $(document).ready(function () {
    $("li.item-ii").find("li").css({ color: "red", border: "2px solid red" });
  });
  $(".nameInput").focus(function () {
    alert("You are clicking the Name Input");
  });
});
