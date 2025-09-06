// Variables:Variables are containers that store data values. In JavaScript,
// you can declare variables using three keywords: var, let, and const.
// Each has different behaviors regarding scope, hoisting, and reassignment.
// let x = 1;
// function example() {
//     if (true) {
//         var x = 1;
//     }
//     console.log(x); // 1 (accessible outside the if block)
// }
// example()

// function example() {
//     if (true) {
//         let x = 1;
//     }
//     console.log(x); // 1 (accessible outside the if block)
// }
// example()

// function example() {
//     if (true) {
//         const x = 1;
//     }
//     console.log(x); // 1 (accessible outside the if block)
// }
// example()

// var count = 5;
// var count = 10;
// console.log(count);

// function processItems() {
//   let i = 100;
//   i = 45;

//     for (let i = 0; i < 200; i++) {

//   }
//   console.log(i);
// }
// processItems();

var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
}
// console.log(a);
// console.log(b); //ReferenceError: b is not defined
// console.log(c); //ReferenceError: c is not defined

// let d = 20;
// if (d == 20) {
//   let d = 10;
//   console.log(d)
// }

// let p = 10;
// function x() {
//   var p = 100;
//   console.log(p);
// }
// x()
// console.log(p)


