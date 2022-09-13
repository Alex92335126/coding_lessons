const plot1 = [4, 5, 6];
const plot2 = [1, 2, 3, ...plot1, 7, 8];

console.log(plot2);

const person1 = {
  name: "Gary",
  age: 10,
  school: "Xccelerate",
  gender: "boy",
};

const person2 = {
  ...person1,
  name: "Michael",
};

console.log(person2);

//Deep copy
let names = ["Ash", "Anson", "Nicole", "Chris", "Alex"];
let names2 = [...names];

names.pop();
names.pop();
names.pop();
names.pop();
names.pop();

console.log(names);
console.log(names2);

const newPerson = {
  name: "Gary",
  age: 10,
  school: "Xccelerate",
  gender: "boy",
};

const newPerson2 = { ...newPerson };

delete newPerson.name;
delete newPerson.age;
delete newPerson.school;
delete newPerson.gender;
console.log(newPerson);
console.log(newPerson2);
