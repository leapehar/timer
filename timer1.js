
//First solution

// const alarm = function() {
//   process.stdout.write('\x07');
// }
// setTimeout(alarm, 3000);

//Correct solution 

process.argv.slice(2).forEach(numOfSeconds => {
  if (!isNaN(numOfSeconds) && numOfSeconds >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numOfSeconds * 1000);
  }
});

