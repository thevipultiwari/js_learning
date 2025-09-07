// 1. Before promise we used to depend on callback functions which would result in
//     1.) Callback Hell(Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable.
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell(Pyramid of doom) => We use promise chaining.
// This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises.
// Always remember to return a value.This returned value will be used by the next.then()

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
  })
  .then(function () {
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

///Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Succesful"); 
  });
}
function validateCart(cart) {
  return true;
}
