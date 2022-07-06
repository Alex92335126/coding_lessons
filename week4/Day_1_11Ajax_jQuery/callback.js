//Callback
function countryData(country, callback) {
  $.get(`https://restcountries.com/v3.1/name/${country}`).done((data) =>
    callback(data)
  );
}

countryData("Hong Kong", function (hkData) {
  countryData("Sweden", function (sData) {
    console.log(hkData[0].population);
    console.log(sData[0].population);
  });
});
