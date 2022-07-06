$(function () {
  var elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  var hashColor = "#";
  for (let i = 0; i < 6; i++) {
    hashColor += elements[Math.floor(Math.random() * elements.length)];
  }
  console.log(hashColor);
  $(".box").css("background-color", hashColor);
  $(".hide").on("click", function () {
    $(".box").hide();
  });
  $(".show").on("click", function () {
    $(".box").show();
  });
  $(".toggle").on("click", function () {
    $(".box").toggle();
  });
  $(".fadeOut").on("click", function () {
    $(".box").fadeOut();
  });
  $(".fadeTo").on("click", function () {
    $(".box").fadeTo(500, 0.4);
  });
  $(".fadeIn").on("click", function () {
    $(".box").fadeIn();
  });
  $(".slideUp").on("click", function () {
    $(".box").slideUp();
  });
  $(".slideDown").on("click", function () {
    $(".box").slideDown();
  });
  $(".slideToggle").on("click", function () {
    $(".box").slideToggle();
  });
  $(".fadeToggle").on("click", function () {
    $(".box").fadeToggle();
  });
  $(".animate").on("click", function () {
    $(".box").animate({ borderRadius: "50%" });
  });
  $(".delay").on("click", function () {
    $(".box").delay("slow").fadeToggle();
  });
});
