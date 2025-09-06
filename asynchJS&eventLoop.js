// asynch functions
// console.log("start");
// document.getElementById("btn").addEventListener("click", function cb() {
  
//     console.log("callback");
// });
// console.log("end");
// this add event listner is another superpower by the browser
// to the js engine through window object in form of a web api(ie DOM API)

// console.log("Start")
// Callback function
function sayHello() {
    console.log("Hello!");
}

// Main function that takes a callback
function greet(name, callback) {
    console.log("Hi " + name);
    sayHello(); // Execute the callback function
}

// Using the callback
greet("John", sayHello);

