$(function () {
  $("#kanyeForm").click(function () {
    $.ajax({
      url: "https://api.kanye.rest/",
      type: "GET",
    }).done(function (data) {
      console.log("Data", data);
      $("#kanye").empty().append(data.quote);
    });
  });
});
