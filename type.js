console.log(Array.isArray()); 



// Constructor check
let num = 42;
console.log(num.constructor === Number); // true

//Object.prototype.toSting(most relaible)
console.log(Object.prototype.toString.call([])); 

function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

console.log(getType([]));        // "Array"
console.log(getType({}));        // "Object"  
console.log(getType(42));        // "Number"