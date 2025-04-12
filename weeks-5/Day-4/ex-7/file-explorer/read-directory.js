// Import the fs module
const fs = require('fs');

// Read and display files in the current directory
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  console.log('Files in the directory:');
  files.forEach(file => {
    console.log(file);
  });
}); 