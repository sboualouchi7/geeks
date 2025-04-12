const greet = require('./greting.js');
const displayColorfulMessage = require('./colorful-message');
const displayFileContent = require('./read-file');

displayFileContent();
console.log(greet('salman'));

displayColorfulMessage();