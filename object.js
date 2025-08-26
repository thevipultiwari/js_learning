//plain object
let person = {
  name: "vipul",
  age: 23,
};
//array(special object)
let numbers = [1, 2, 3];

// Function (special object)

function greet() {
  return "Good Morning";
}
console.log(greet());

// Date (built-in object)
let date = new Date();
console.log(date);

// RegExp (built-in object)
let pattern = /[a-z]+/g;
console.log(pattern);

const man = Object.freeze({
  name: "Vipul",
  age: 23,
});
man.height = 171;
console.log(man);

function mine() {
  // const var1 = 1;
  // let var2 = 2;
  var var3 = 3;
  console.log(var3);
}
// console.log(var1);
// console.log(var2);
mine();
