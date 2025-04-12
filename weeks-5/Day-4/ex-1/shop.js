
const products = require('./products.js');

function findProductByName(name) {
  const searchName = name.toLowerCase();
  
  const product = products.find(product => 
    product.name.toLowerCase() === searchName
  );
  
  return product || null;
}

function displayProductDetails(productName) {
  const product = findProductByName(productName);
  
  if (product) {
    console.log(`\nProduct Found:`);
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(`\nProduct '${productName}' not found in our catalog.`);
  }
}

// Test the function with different product names
console.log("Welcome to the Product Shop!");
console.log("-----------------------------");

displayProductDetails("Laptop");
displayProductDetails("Coffee Maker");
displayProductDetails("Running Shoes");
displayProductDetails("Gaming Console"); // This one doesn't exist in our catalog

console.log("\nSearch completed.");