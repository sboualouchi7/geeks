// Import the file manager functions using CommonJS syntax
const fileManager = require('./fileManager.js');

const helloFilePath = 'Hello World.txt';
const byeFilePath = 'Bye World.txt';

console.log('Reading from Hello World.txt...');
const helloContent = fileManager.readFile(helloFilePath);

if (helloContent !== null) {
  console.log(`Content of ${helloFilePath}: "${helloContent}"`);
}

console.log('\nWriting to Bye World.txt...');
const newContent = 'Writing to the file';
const writeResult = fileManager.writeFile(byeFilePath, newContent);

if (writeResult) {
  console.log('\nVerifying the write operation...');
  const byeContent = fileManager.readFile(byeFilePath);
  
  if (byeContent !== null) {
    console.log(`Content of ${byeFilePath} after writing: "${byeContent}"`);
  }
}

console.log('\nFile operations completed.');