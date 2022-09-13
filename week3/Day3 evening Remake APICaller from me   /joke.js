let JOKEAPI = document.getElementById("JOKEAPI")
let repsonseText = document.getElementsByClassName("apiResponse")[0];
JOKEAPI.addEventListener("click", function() {
    document.getElementsByClassName("apiSource")[0].innerHTML = "JOKEAPI";
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response)) => response.json()
    .then((data) => (responseText.innerHTML = data.joke)); 
});

let KANYEAPI = document.getElementById("KANYEAPI");
KanyeAPI.addEventListener("click", function() {
    document.getElementById("apiSource")[0].innerHTML = "Kanye API";
    fetch("https://api.kanye.rest/")
    .then((reponse)) => response.json())
    .then(data) => (responseText.innerHTML = data.quote));
});

let UniAPI = document.getElementById("UniAPI")
UniAPI.addEventListener("click", function () {
    document.getElementsByClassName("apiSource")[0].innerHTML= "University API"
    fetch("http://universities.hipolabs.com/search?country=Japan")
        .then((response) => response.json())
        .then((data) => {
            responseText.innerHTML
        })
}  
)