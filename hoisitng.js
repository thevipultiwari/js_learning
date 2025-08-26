// Definition: Hoisting refers to the process where the JavaScript interpreter appears 
//             to move declarations of variables, functions, classes, or imports
//             to the top of their scope.This allows you to use variables and functions
//             before they're actually declared in your code




//funciton hoisting

console.log(getName);

function getName() {
    console.log("vipul");
}

// variable hosting
// it kinda behaves like
// var x;
// console.log(x);
//x=5;
console.log(x) // undefined
var x = 5;
 

var getNew = function () {
    console.log("vipul")
}
console.log(getName); // print the [Function: getName]
getName()// getNmae is not a function its a variable