var title = document.getElementById("heading");
title.addEventListener("click", function () {
  title.innerHTML = "I Have Been Clicked!";
});
var dateButton = document.getElementById("buttonDate");
dateButton.addEventListener("click", function () {
  document.getElementById("date").innerHTML = Date();
});
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Please type in your name");
  } else {
    alert("Thank you" + " " + x);
  }
}
const element = document.getElementsByTagName("p");
document.getElementById("newText").innerHTML =
  "<br>" +
  element[1].innerHTML;
document.getElementsByClassName("classText")[1].innerHTML = "Windows";
const newElement = document.getElementsByClassName("classText")[1];
newElement.addEventListener("dblclick", function () {
  newElement.style.color = "red";
  newElement.style.fontFamily = "Arial";
  newElement.innerHTML = "Changed Text";
});
const newImage = document.getElementById("spiderman");
newImage.addEventListener("dblclick",function(){
  newImage.src = "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg";
  newImage.style.height = "300px";
  newImage.style.width = "300px";
  newImage.style.borderRadius = "50%";
})