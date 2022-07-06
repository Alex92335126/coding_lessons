let x;
let y;

const userNames = ["Siddarth", "Bibek", "Steve Jobs", "Elon Musk"];

let randomValue = Math.floor(Math.random() * userNames.length);
let randomUser = userNames[randomValue];

document.getElementsByClassName("programmer")[0].innerHTML = " " + randomUser;

let colors = ["red", "orange", "indigo", "yellow", "green", "blue", "violet"];
let randomcolorValue = Math.floor(Math.random() * colors.length);
let randomColors = colors[randomcolorValue];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent auto sending form 
  x = document.getElementById("xAxis").value;
  y = document.getElementById("yAxis").value;
  console.log(x, y);
});

$("#square").on("click", function() {
    ctx.clearRect(x, y, canvas.width, canvas.height);
    ctx.fillStyle = randomColors;
    ctx.fillRect(x, y, 150, 150);
})

$("#circle").on("click", function() {
    ctx.clearRect(x, y, canvas.width, canvas.length);
    ctx.fillStyle = randomColors;
    ctx.beginPath();
    ctx.arc(x, y, 150, 0, 2* Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
});

$("#triangle").on("click", function() {
    ctx.clearRect(x, y, canvas.width, canvas.length);
    ctx.fillStyle = randomColors;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 300);
    ctx.lineTo(300, 300);
    ctx.fill();

});
    