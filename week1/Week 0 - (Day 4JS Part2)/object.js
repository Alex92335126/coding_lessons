const instructor = {
  name: "Siddarth",
  age: 29,
  location: "Hong Kong",
  origin: "India",
  greeting: function () {
    const newMessage =
      "Good Afternoon, my name is " +
      instructor.name +
      " and i am from " +
      instructor.origin;
    return newMessage;
  },
};

console.log(instructor.greeting());
console.log(
  `${instructor.name} is a Web Dev Trainer who lives in ${instructor.location}`
);

for (let v of Object.values(instructor)) {
  console.log(v);
}
for (let [k,v] of Object.entries(instructor)) {
  console.log(k,v);
}instructor.hairColor = "black";
instructor.hairType = "Curly";
console.log(instructor);
delete instructor.hairColor;
console.log(instructor);
console.log(Object.keys(instructor));
console.log(Object.values(instructor));
for (let k of Object.keys(instructor)) {
  console.log(k);
}