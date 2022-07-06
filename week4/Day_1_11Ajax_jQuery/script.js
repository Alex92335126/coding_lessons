//jQuery

console.log($("h1").css("color", "orange"));
$("h1").css("display", "inline-block");
$(".article").html("I got changed");
$("#fName").val("John");

// document.getElementsByTagName("h1")[0].addEventListener("mouseover", () => {
//   document.getElementsByTagName("h1")[0].innerHTML = "I got hovered";
// });

$("h1")
  .eq(0)
  .on("mouseover", () => {
    $("h1").eq(0).html("I got hovered using jQuery");
  });

let object = {
  name: "John",
  age: 10,
};
