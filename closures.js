// functions along with its lexical scope bundle together is called closures.

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a); // value of a doesnot persist refrence to a persist so 100
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// function z() {
//   var b = 900;
//   function x() {
//     var a = 100;
//     function y() {
//       console.log(a + b);
//     }
//     y();
//   }
//   x();
// }
// z();


