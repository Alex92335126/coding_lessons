const answerList = [
  "It is certain",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "Most likely",
  "Signs point to yes",
  "Ask again later",
  "Better not tell you now",
  "Concertrate and ask again",
  "Don't count on it",
  "My sources say no",
  "My reply is no",
  "Very doubtful",
  "Outlook not so good",
];

let form = document.querySelector("form");
let answer = document.getElementById("text");
form.addEventListener("submit", function (event) {
  event.preventDefault(); //Stops from auto submitting
  let randomNumber = Math.floor(Math.random() * answerList.length); //Giving us a random index
  console.log(answerList[randomNumber]);
  answer.innerHTML = answerList[randomNumber];
});

// let randomColor = Math.floor(Math.random() *16777215).toString(16);
// let colorChanger = document.getElementById("colorChanger");
// colorChanger.addEventListener("click", function() {

// });
