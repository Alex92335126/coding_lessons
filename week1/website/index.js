const text = document.querySelector(".my-email");
text.addEventListener("mouseover", function () {
    console.log('clicked me')
  text.style.color = "blue";
  text.innerHTML = "alex92335126@gmail.com";
});
text.addEventListener("mouseout", function () {
    console.log('leave me')
  text.style.color = "black";
  text.innerHTML = "Email";
});