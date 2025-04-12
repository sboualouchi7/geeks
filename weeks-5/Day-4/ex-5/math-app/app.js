
const _ = require('lodash');

const math = require('./math');

console.log('Math Application');
console.log('===============');

console.log('\nUsing custom math module:');
console.log('Addition: 5 + 3 + 2 =', math.add(5, 3, 2));
console.log('Multiplication: 4 × 3 × 2 =', math.multiply(4, 3, 2));
console.log('Subtraction: 10 - 3 - 2 =', math.subtract(10, 3, 2));
console.log('Division: 24 ÷ 2 ÷ 3 =', math.divide(24, 2, 3));

// Using lodash utility functions
console.log('\nUsing lodash utilities:');

// Summing values in an array
const numbers = [10, 5, 8, 20, 3];
console.log('Original array:', numbers);
console.log('Sum using lodash:', _.sum(numbers));

// Finding max and min values
console.log('Max value using lodash:', _.max(numbers));
console.log('Min value using lodash:', _.min(numbers));

// Using _.chunk to split the array
console.log('Chunked array (size 2):', _.chunk(numbers, 2));

// Using _.sample to get random elements
console.log('Random sample from array:', _.sample(numbers));
console.log('3 random samples from array:', _.sampleSize(numbers, 3));

// Using our math functions with lodash
console.log('\nCombining custom math and lodash:');

// Using lodash to map each number in the array and then adding them
const doubled = _.map(numbers, n => n * 2);
console.log('Doubled numbers:', doubled);
console.log('Sum of doubled numbers:', math.add(...doubled));

// Finding average using lodash sum and our own divide function
console.log('Average of numbers:', math.divide(_.sum(numbers), numbers.length));

console.log('Range (max - min):', math.subtract(_.max(numbers), _.min(numbers)));

console.log('\nMath Application Completed');