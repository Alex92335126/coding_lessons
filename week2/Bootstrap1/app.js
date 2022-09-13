// const todayLesson = {
//   operatingSys: "Mac OSX",
//   topic: "Bootstrap",
//   course: "Web Dev",
// };
// console.log(todayLesson.topic);
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function checkDays(array) {
  const weekday = [];
  const weekend = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "Saturday" || array[i] == "Sunday") {
      weekend.push(array[i]);
    } else {
      weekday.push(array[i]);
    }
  }
  return { weekday: weekday, weekend: weekend };
}
console.log(checkDays(daysOfTheWeek));

// let n = 0;
// while (n < 100) {
//   n++;
// }
// console.log(n);
// let result = " ";
// let i = 0;
// do {
//   i = i + 1;
//   result = result + i + ('\n');
// } while (i < 5);
// console.log(result);

// let datapoints = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
// };
// for (const property in datapoints) {
//   console.log(`${property}: ${datapoints[property]}`);
// }

// const daysOfTheWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// function loop123(array) {
//   for (i = 0; i < 3; i++) {
//     console.log(array[i])
//   }
// }
// loop123(daysOfTheWeek);
