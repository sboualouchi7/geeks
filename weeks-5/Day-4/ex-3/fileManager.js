// Import the fs module for file operations
const fs = require('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`Successfully read from file: ${filePath}`);
    return data;
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error.message}`);
    return null;
  }
}


function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Successfully wrote to file: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error writing to file ${filePath}: ${error.message}`);
    return false;
  }
}

module.exports = {
  readFile,
  writeFile
};