const add = function(number1, number2) {
	return(number1 + number2);
};

const subtract = function(number1, number2) {
	return(number1 - number2);
};

const sum = function(array) {
	let sum = 0;
  for(let count = 0 ; count < array.length ; count++){
    sum += array[count];
  }
  return(sum);
};

const multiply = function(array) {
  let multiplication = 1;
  for(let count = 0 ; count < array.length ; count++){
    multiplication *= array[count];
  }
  return(multiplication);
};


const power = function(base, exponent) {
	return(Math.pow(base, exponent));
};

const factorial = function(number) {
  let facto = 1;
	for(let count = number ; count > 0 ; count--){
    facto *= count;
  }
  return(facto);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
