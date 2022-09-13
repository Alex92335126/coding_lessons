/*console.log("Good Morning");
console.log("Good Afternoon");
setTimeout(() => {
  console.log("Good Evening");
}, 1000);
console.log("Good Night");
function addition(n1, n2) {
  return n1 + n2;
}
setTimeout(() => {
  console.log("Delayed For 2 Seconds");
}, 2000);
console.log(addition(20, 10));
function multiplication(n3, n4) {
  return n3 * n4;
}
setTimeout(() => {
  console.log("Delayed For 3 Seconds");
}, 3000);
console.log(multiplication(20, 10));*/
/*var http = new XMLHttpRequest();
http.open("GET", "/server/file.json");
http.onreadystatechange = function () {
  if (http.readyState != XMLHttpRequest.DONE) {
    return;
  } else if (http.status == 200) {
    console.log(http.responseText);
  } else {
    console.log("An Error Occured" + http.status);
  }
};
http.send();*/
/*let http = new XMLHttpRequest();
console.log("Step 1");
http.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
console.log("Step 2");
http.onreadystatechange = function () {
  console.log("Step 5");
  if (http.readyState != XMLHttpRequest.DONE) {
    return;
  } else if (http.status == 200) {
    console.log("Step 6");
    console.log(http.responseText);
  } else {
    console.log("An Error Occurred" + http.status);
  }
};
console.log("Step 3");
http.send();
console.log("Step 4");
console.log("I run yeah");*/
/*let newObject = {
  name: "Siddarth",
  age: 29,
  dob: "20/01/1993",
};
console.log(typeof newObject);
let newString = JSON.stringify(newObject);
console.log(typeof newString);*/
/*let person = `{
    "name":"James",
    "lastName":"Bond",
    "age":"55",
    "location":"London"
}`;
console.log(typeof person);
let parsed = JSON.parse(person);
console.log(typeof parsed);*/
/*let http = new XMLHttpRequest();
http.open("GET", "https://restcountries.com/v3.1/region/asia");
http.onreadystatechange = function () {
  if (http.readyState != XMLHttpRequest.DONE) {
    return;
  } else if (http.status == 200) {
    let parsed = JSON.parse(http.responseText);
    console.log(parsed);
  } else {
    console.log("An Error Occured" + http.status);
  }
};
http.send();*/
/*const countryData = () => {
  const requestData = fetch("https://restcountries.com/v3.1/region/americas")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
countryData();*/
/*let title = document.getElementById("title");
title.innerHTML = "Hello World";
console.log(title);*/
/*title.ondblclick = function () {
  title.style.color = "red";
  title.style.fontFamily = "Arial";
  title.style.textDecoration = "underline";
};*/
/*title.addEventListener("mouseover", function () {
  title.style.color = "red";
  title.style.fontFamily = "Arial";
  title.style.textDecoration = "underline";
});*/
/*var elements = document.getElementsByTagName("p");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    alert("I was clicked");
  });
}*/
