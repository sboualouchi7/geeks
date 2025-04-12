// math.js - Custom math module with basic math operations


function add(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  
  
  function multiply(...numbers) {
    return numbers.reduce((product, number) => product * number, 1);
  }
  

  function subtract(first, ...rest) {
    return rest.reduce((result, number) => result - number, first);
  }
  

  function divide(first, ...rest) {
    return rest.reduce((result, number) => {
      if (number === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return result / number;
    }, first);
  }
  
  module.exports = {
    add,
    multiply,
    subtract,
    divide
  };