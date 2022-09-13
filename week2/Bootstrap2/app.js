var title = document.getElementById("heading");
title.addEventListener("click", function () {
  title.innerHTML = "I have Been Clicked";
});

var dateButton = document.getElementById("buttonDate");
dateButton.addEventListener("click", function () {
  document.getElementById("date").innerHTML = Date();
});

function validateForm() {
  let x = document.forms["myForm"]["frame"].value;
  if (x == "") {
    alert("Please type in your name");
  } else {
    alert("Thank you" + "" + x);
  }
}

const element = document.getElementsByTagName("p");
document.getElementById("newtext").innerHTML =
  "<br>" +
  element[0].innerHTML +
  "<bar>" +
  element[1].innerHTML +
  "<bar>" +
  element[2].innerHTML;
document.getElementsByClassName("classText")[1].innerHTML = "Windows";
const newElement = document.getElementsByClassName("classText")[1];
newElement.addEventListener();
