let counter = 0;
const intervalId = setInterval(() => {
  console.log(counter++);
  
  // Stop after 10 numbers (optional)
  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000);
