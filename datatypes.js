// let x;
// x = 6;
// console.log(x)
console.log(global);
console.log(-1 / 0);
console.log(0.1 + 0.2);

//String literals
let name = "vipul";
let str = `Hello $${name}`;
console.log(name);
console.log(str);

let str1 = "hello";
str1[0] = "h";
console.log(str1);

// str1 = "H" + str1.slice(1);
// console.log(str);
// console.log(str.length)
// console.log(str[1])
// console.log(str.charAt(10))
// console.log(str.indexOf("vipul"));
// console.log(str.includes("vip"))
// console.log(str.toUpperCase())
// console.log("x" + str.slice(3));
// console.log(str)
// console.log(str.slice(0, 7))
// Boolean(false)
// let x;
// console.log(x)

function test(a, b) {
  // b is not provided
  console.log(b);
  console.log(typeof b);
  console.log(typeof b); // undefined
}
test(1, 1);
// console.log(typeof b);

// console.log(typeof str3);

// null datatype
let data = null;
console.log(data);
console.log(typeof null);

let price = 100;
let tax = 0.1;
let invoice = `
Product Price: $${price}
Tax: $${price * tax}
Total: $${price + price * tax}
`;

console.log(invoice);

let name1;
console.log(name1)
console.log(typeof name1)

// Symbol 
let syb1 = Symbol();
let syb2 = Symbol();
console.log(syb1 == syb2);
let id = Symbol("id");
console.log(id);
console.log(id.toString())
let a = "vipul"
console.log(a)
let b = 2;
console.log(b)

