let japanApi = $.get("https://restcountries.com/v3.1/name/Japan");
let germanyApi = $.get("https://restcountries.com/v3.1/name/Germany");

$.when(japanApi, germanyApi).done((japanData, germanyData) => {
  console.log(japanData);
  console.log(germanyData[0][0].population);
});
