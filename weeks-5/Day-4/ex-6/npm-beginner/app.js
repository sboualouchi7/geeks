// Use ES Module import (for Chalk 5+)
import chalk from 'chalk';

// Now chalk.blue will work
console.log(chalk.blue('Hello world!'));
console.log(chalk.red.bold('Error!'));
console.log(chalk.green.underline('Success!'));