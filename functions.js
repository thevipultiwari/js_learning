console.log(sayBye); // TypeError: sayBye is not a function

var sayBye = function () {
  return "Bye!";
};

const circleArea = (radius) => Math.PI * radius * radius;
const circleArea2 = (radius) => {
  return Math.PI * radius * radius;
};
