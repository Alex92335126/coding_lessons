function example(weather) {
  if (weather === "rainy") {
    return "use umbrella";
  } else if (weather === "sunny") {
    return "use sunscreen";
  } else if (weather === "spring") {
    return "go outside";
  } else {
    return "do nothing";
  }
}

const weather = "rainy";

// console.log(weather === "rainy" ? "stay home" : "go out");

function example2(weather) {
  return weather === "rainy"
    ? "use umbrella"
    : weather === "sunny"
    ? "use sunscreen"
    : weather === "spring"
    ? "go outside"
    : "do nothing";
}

// example("rainy");
console.log(example2("spring"));
