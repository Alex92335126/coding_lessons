$(function () {
  // const interval = window.setInterval(() => {
  //   console.log("DRIP");
  // }, 1000);

  // setTimeout(() => {
  //   clearInterval(interval);
  //   console.log("No More drips");
  // }, 10000);
  // Make a counter
  let clicked = 0;

  // The path to the images
  const pokemonImageClasses = [
    "./assets/images/blubsaur.jpg",
    "./assets/images/charmander.png",
    "./assets/images/pikachu.jpg",
    "./assets/images/squirtle.png",
  ];

  // Get an array of all of my squares
  const squares = $(".square");

  // Random number helper function
  function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Function to assign pokemon to a random number within my squares array
  function randomPokemon() {
    let square = squares.eq(randomNumber(20));
    square.animate(1000, function () {
      $(this)
        .first()
        .attr(
          "style",
          ` background-image: url(${
            pokemonImageClasses[randomNumber(4)]
          }); background-size: cover; display: none `
        );

      $(this).fadeIn(1000);
    });
  }

  // start the interval to make random pokemon appear
  const pokemon = window.setInterval(() => {
    randomPokemon();
  }, 1500);

  // add click event with check
  $(".square").on("click", function () {
    if ($(this).css("background-image") !== "none") {
      $(this).css("background-image", "none");
      clicked++;
    } else {
      alert("Can't click here");
    }

    if (clicked > 20) {
      alert("Dont you have better things to do!");
      clearInterval(pokemon);
    }
  });
});
