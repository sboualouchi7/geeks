const chalk = require('chalk').default;

function displayColorfulMessage() {
    console.log(chalk.blue.bgYellow.bold('This is a colorful message!'));
    console.log(chalk.green('Node.js is fun!'));
    console.log(chalk.red.bold('Enjoy coding!'));
}

module.exports = displayColorfulMessage;