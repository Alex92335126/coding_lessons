/*const newArray = [
  1,
  2,
  3,
  "Siddarth",
  "Javascript",
  { name: "Harry", location: "London" },
];
const newestArray = [10, 20, 30, ...newArray];
console.log(newestArray);
console.log(newArray);
console.log(newArray[5].location);
for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}
let combined = newArray.concat(newestArray);
console.log(combined);*/

// let newItems = ["Toothbrush", "Hairdryer", "Comb", "Earbuds", "Toothbrush"];
// newItems.push("Nail Cutter");*/
// newItems.unshift("Nail Filler");
// console.log(newItems);
// console.log(newItems.indexOf("Hairdryer"));
// console.log(newItems.lastIndexOf("Toothbrush"));
// console.log(newItems.includes("Cheese"));
// console.log(newItems.indexOf("Toothbrush"));
// console.log(newItems.lastIndexOf("Toothbrush"));
// const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(newArray.map((i) => i * 2));
const newWords = ["Beef", "Cheese", "Burger", "Salad"];
// console.log(newWords.map((word) => word.concat(":Food")));
// console.log(newWords.filter((word) => word.includes("C")));
console.log(newWords[1])
console.log(newWords.filter((word) => word.length <= 4));
// const array1 = [1, 2, 3, 4];
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   0
// );
// console.log(sumWithInitial);

const currentArray = [
  "one",
  "baby",
  "dodge",
  "harlem",
  "chocolate",
  "nut",
  "past",
  "joker",
  "selfish",
  "microscope",
];

// YOUR CODE HERE
const secondObjective = currentArray.filter((word) => word.length >=4);
console.log(secondObjective);
