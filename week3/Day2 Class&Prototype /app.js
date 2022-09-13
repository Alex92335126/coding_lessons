/*const newObject = {
  name: "James",
  lastName: "Bond",
  age: 40,
};
console.log(newObject.name);
console.log(newObject.age);
console.log(newObject);*/
/*class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    console.log(this.height * this.width);
  }
}
const newSquare = new Square(10, 10);
console.log(newSquare);*/
/*const person = function (name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
};
const person1 = new person("Andy", 30, "Japan");
console.log(person1);*/
/*class Rectangle {
  constructor() {
    this.name = "Rectangle";
  }
}
const rect1 = new Rectangle();
console.log(rect1.name);*/
/*const student = function (name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
};
const student1 = new student("Siddarth", 29, "DMS");
const student2 = new student("Bibek", 22, "KHS");
console.log(typeof student1);
console.log(typeof student2);
student.prototype.subject = function () {
  return `${this.name} studies at ${this.school} and is ${this.age} and both study Computer Science`;
};
console.log(student1.subject());
console.log(student2.subject());*/
/*const personPrototype = {
  greet() {
    console.log("Hello!");
  },
};
const carl = Object.create(personPrototype);
carl.greet();*/
/*const personPrototype = {
  greet() {
    console.log(`Hello! My name is ${this.name}`);
  },
};
function Person(name) {
  this.name = name;
}
Person.prototype = personPrototype;
Person.prototype.constructor = Person;
const edward = new Person("Edward");
edward.greet();*/
/*const Pencil = function (name, color, thickness) {
  this.name = name;
  this.color = color;
  this.thickness = thickness;
};
const pencil1 = new Pencil("Zebra", "Black", "2B");
const pencil2 = new Pencil("Hippo", "Green", "2A");
console.log(pencil1);
console.log(pencil2);
Pencil.prototype.description = function () {
  return `This Pencil is called ${this.name} and it's ${this.color} and the thickness is ${this.thickness}`;
};
console.log(pencil1.description());
console.log(pencil2.description());*/
/*const Person = function (name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
};
Person.prototype.greeting = function () {
  return `Hello, my name is ${this.name} and i am ${this.age} and i live in ${this.location}`;
};
let superhero1 = new Person("Spider-Man", 25, "New York City");
let superhero2 = new Person("Venom", 35, "New York City");
Person.prototype.dining = function () {
  return `I am dining at Burger King @ ${this.location} and this is ${this.name}`;
};
console.log(superhero1.greeting());
console.log(superhero2.dining());*/
/*class Rapper {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  greeting() {
    return `What's Good. My name is ${this.name}. I'm ${this.age} years old and I'm from ${this.location}`;
  }
}
const Rapper1 = new Rapper("Drake", 35, "Toronto,Canada");
const Rapper2 = new Rapper(
  "Kanye West",
  44,
  "Chicago, United States Of America"
);
console.log(Rapper1.greeting());
console.log(Rapper2.greeting());*/
/*class MTRTicketPrice {
  constructor(price) {
    this.price = price;
    return this.price;
  }
  increase(price) {
    this.price += price;
    return this.price;
  }
}
const TrainTicket = new MTRTicketPrice(10);
console.log(TrainTicket);
console.log(TrainTicket.increase(20));
TrainTicket.price += 20;
console.log(TrainTicket.price);*/
/*class Soldier {
  constructor(options) {
    this.type = options.type;
  }
  shoot() {
    return "Bang";
  }
}
class AmericanSoldier extends Soldier {
  constructor(options) {
    super(options);
    this.flag = options.flag;
  }
  throw() {
    return "Boom";
  }
}
const thePatriot = new AmericanSoldier({ type: "Marine", flag: "American" });
console.log(thePatriot.shoot());
console.log(thePatriot.throw());*/
class BasicTraining {
  constructor(options) {
    this.type = options.type;
    this.uniform = options.uniform;
  }
  shoot() {
    return "Bang";
  }
}
class AmericanSoldier {
  constructor(options) {
    this.trained = new BasicTraining({ type: "Marine", uniform: "Beach Camo" });
    this.flag = options.flag;
  }
  throw() {
    return "Boom";
  }
  shoot() {
    return this.trained.shoot();
  }
}
class MercenarySoldier {
  constructor(options) {
    this.soldier = new BasicTraining({
      type: "Brigadler",
      uniform: "City Camoflage",
    });
    this.loyalTo = options.loyalTo;
  }
  throw() {
    return "Boom";
  }
  shoot() {
    return this.soldier.shoot();
  }
}
const thePatriot = new AmericanSoldier({ flag: "American" });
const deadpool = new MercenarySoldier({ loyalTo: "The X-Men" });
console.log(deadpool.soldier.shoot());
console.log(deadpool.throw());
console.log(thePatriot.trained.uniform);
console.log(deadpool.soldier.uniform);

