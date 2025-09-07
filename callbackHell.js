const cart = ["shoes", "pants", "kurta"];
//Problems with callback function
//Problem-1: CALLBACK HELL
//When a function is passed as an argument to another function, it becomes a callback function. 
// This process continues and there are many callbacks inside another's Callback function.
//This grows the code horizontally instead of vertically. That mechanism is known as callback hell.
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWALLET;
    });
  });
});

//Problem-2: INVERSION OF CONTROL
//The callback function is passed to another callback, this way we lose the control of our code. 
// We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
//That process is called inversion of control. 
api.createOrder(cart, function () {
    api.proceedToPayment(function () {// we are giving power/control for this call back fn in the hand of createOrder function
                                      // so this is basically callback function
    
  });
});