let a = 10;
let b = a;
a = 20;
console.log(a);
console.log(b);

// function (obj reference)

var number = 10;
function increase(number) {
  number++;
}
console.log(number)
console.log(increase(number));
function numbers() {
    
    console.log(a);
    
    var a = 5;
    let b = 10;
    console.log(b);
    return a + b;
}
       
console.log(numbers());

