// function hello()
// {
//     if(true)
//     {
//         var a = 'Javascript'
//         let b = 'C++'
//         const c = 'Python'
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

// }
// hello();

// const myCar = {
//     name: "Bugatti Veryon",
//     engine: "0.8L",
//     transmission: "7-speed direct shift automatic",
//     topSpeed: "408 km/h",
//   };
// const carX = {
//     name: "hello Veryon",
//     engine: "0.8L",
//     transmission: "7-speed direct shift automatic",
//     topSpeed: "408 km/h",
//   };
  
//   // YOUR CODE HERE
    
//   function carDescription(car) {
//       //string concentanation
//     const carInfo = 
//     "The " + 
//     car.name + 
//     " has won the award for the fastest sports car in the world, with a top speed of " +
//     car.topSpeed + 
//     " an " + 
//     car.engine + 
//     " engine and a " + 
//     car.transmission + 
//     " system.";

//     //back ticks
//     const theCar = `The ${car.name} has won the award for the fastest sports car in the world, with a top speed of ${car.topSpeed} an ${car.engine} engine and a ${car.transmission} system.`

//     return theCar;

//   }
// console.log(carDescription(myCar))
// // console.log(carDescription(carX))


// function createCar(colour, year, model) {
//     return {
//       colour: colour,
//       year: year,
//       model: model
//     }
//   }
// console.log(createCar("red", 1981, "FordGT"))

function fizzBuzz(number) {
    console.log(typeof number)
    if (typeof number === 'string') return 'Please insert a number larger or equal to 41111'
    if(!number) return []
    if (number < 4)  return 'Please insert a value greater than or equal to 4'
    let array = []
    for (i =1; i < number; i++) {
        if (i%4===0 && i%5===0){
            array.push("FizzBuzz")
       
        }
        else if (i%4===0){
            array.push("Fizz")
      
        }
        else if   (i%5===0){
            array.push("Buzz")
      
        }
        else {
            array.push(i)
        }

    } 
    // console.log(array)
    return array
}
  console.log(fizzBuzz("hello"))