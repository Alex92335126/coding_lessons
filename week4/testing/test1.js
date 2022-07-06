$(function () {
    let elements = [ 0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E"]
    let hashColor = "# ";
    for(let i = 0; i < 6; i++)
        hashColor += elements[Math.floor(Math.random()*elements.length)];
})

console.log(hashColor);
$(".box").css("background-color", hashColor);
$(".hide").on("click", function() {
    $(".box").hide();
})

$(".show").on("click", function() {
    $(".box").show();
}
)