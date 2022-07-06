//Method #1
$.ajax("https://v2.jokeapi.dev/joke/Programming").done((data) =>
  console.log(data)
);

//Method #2
$.get("https://v2.jokeapi.dev/joke/Programming")
  .done((data) => console.log(data))
  .fail((err) => console.log("Error", err))
  .always(() => console.log("I always run"));

//Method #3
$.get("./data/data.json").done((data) => console.log(data));
