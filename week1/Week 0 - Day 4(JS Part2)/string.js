/*Double Quotes*/
let newString = "This is a new string";
console.log(typeof newString);
/*Single Quote*/
let newerString = "This is a even newer string";
console.log(typeof newerString);
/*``Quotes*/
let slantQuote = `You can also write a string like this!`;
console.log(typeof slantQuote);
/*UpperCase & Lowercase*/
let newWords = "Good Afternoon";
let newWordsUpper = newWords.toUpperCase();
let newWordsLower = newWords.toLowerCase();
console.log(newWordsUpper);
console.log(newWordsLower);
/*Split*/
const newStringz = "This is a sentence";
const newerStringz = newStringz.split(" ");
console.log(newerStringz);
console.log(newerStringz[2]);
/*Concat(Joining)*/
let string1 = "Hello";
let string2 = "George!";
let combined = string1.concat(string2);
console.log(string1.concat(',',string2))
console.log(combined);
/*IndexOf*/
let indexOfStr1 = string1.indexOf("o");
let indexOfStr2 = string2.indexOf("o");
console.log(indexOfStr1, indexOfStr2);
/*Slice*/
let newSent = "Today, we are having a class!";
console.log(newSent.slice(0))

