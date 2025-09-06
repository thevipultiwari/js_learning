// function a() {
//     var b = 10;
//     console.log(b)
// }
// // console.log(b)
// a();

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
console.log(b);
