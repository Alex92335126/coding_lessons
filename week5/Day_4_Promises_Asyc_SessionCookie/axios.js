const axios = require("axios");
function getCountry(country) {
  return axios
    .get(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(
        "Name:",
        response.data[0].name,
        "\nCapital:",
        response.data[0].capital,
        "\nRegion:",
        response.data[0].region,
        "\n"
      );
      response.extra = "inserted in then";
      return response;
    })
    .catch(function (error) {
      console.log("Error");
    });
}
getCountry("United States Of America");
