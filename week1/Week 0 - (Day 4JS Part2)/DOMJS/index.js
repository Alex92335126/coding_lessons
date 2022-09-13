const text = document.querySelector("h1");
text.addEventListener("click", function () {
  text.style.color = "orange";
  text.innerHTML = "I have been clicked!";
});
