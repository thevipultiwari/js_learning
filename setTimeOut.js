// let counter = 0;
// const intervalId = setInterval(() => {
//   console.log(counter++);

//   // Stop after 10 numbers (optional)
//   if (counter > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// function x() {
//   for (let i = 1; i <= 5; i++){
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Vipul");
// }
// x();

// function sayHello() {
//     console.log("Hello!");
// }
// console.log("Start");
// setTimeout(function cb() {
//   console.log("Callback");
  
// }, 5000);

// console.log("End");

// const startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }
// console.log("While Expires");

// Define a function that takes a callback
function delayedGreet(name, callback, delay) {
    console.log("Setting up delayed greeting for " + name);
    setTimeout(() => {
        console.log("Hi " + name);
        callback(); // Execute the callback after the delay
    }, delay);
}

// Use it with an arrow function callback
delayedGreet("John", () => {
    console.log("Hello from callback!");
}, 2000);
