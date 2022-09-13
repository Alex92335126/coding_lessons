$(function () {
  console.log($(".box").css("background-color"));
  $(".box").css("background-color", "cornflowerblue");
  console.log($(".box").css("background-color"));
  $(".box").addClass("boxes");
  $(".boxes").css("background-color", "pink");
  $(".box").removeClass("boxes");
  console.log($(".box").hasClass("boxes"));
  $("img").attr(
    "src",
    "https://images.theconversation.com/files/450362/original/file-20220307-121610-zfik1f.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
  );
  $("img").css("height", "200px");
  $("img").css("width", "200px");
  console.log($("img").attr("src"));
  console.log($("input").val());
  $("input").val("Superman");
  $("p").append("Hello World!");
  $("p").prepend("Good Morning!");
  $("<p>New Text</p>").appendTo("div");
  $("<p>Newest Text</p>").prependTo("div");
});
