const person = {
  name: "Cathy",
  year: 19,
  hobby: ["singing", "playing piano"],
  family: {
    brother: "Matt",
    father: "Chris",
    mother: "Sasha",
  },
};

const {
  name,
  year: age,
  hobby,
  family: { brother },
  friends = "none",
} = person;

console.log(name);
console.log(age);
console.log(hobby);
// console.log(family);
console.log(brother);
console.log(friends);

function personName(person) {
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(`Hello I am ${person.firstName} ${person.lastName}`);
}

function personName({ firstName, lastName }) {
  console.log(firstName);
  console.log(lastName);
  console.log(`Hello I am ${firstName} ${lastName}`);
}

personName({ firstName: "Matt", lastName: "Hardy" });
