const names = ["Brian", "Andy", "Matt", "Kay", ["uno", "two"]];

const [first, , , fourth, [one, two]] = names;

console.log(first);
console.log(fourth);
console.log(one);
