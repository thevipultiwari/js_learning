// console.log(sayBye); // TypeError: sayBye is not a function

// var sayBye = function () {
//   return "Bye!";
// };

// const circleArea = (radius) => Math.PI * radius * radius;
// const circleArea2 = (radius) => {
//   return Math.PI * radius * radius;
// };

// Function Statement aka function declaration
function a() {
  console.log("a is called");
}
a();
// function expression
var b = function xyz() {
  console.log("B IS CALLED");
};
b();
// anonymous function
let func = function () {};
//Named function expression

//Parameter and Arguments?
var d = function (param1, param2) {
  return function () {
    console.log("first class function is d")
  }
};
console.log(d());
//First Class Function aka First Class Citizens
console.log("vipul")
