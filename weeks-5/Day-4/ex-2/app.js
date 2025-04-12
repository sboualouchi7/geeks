import people from "./data.js";


function calculateAverageAge(persons) {
  if (persons.length === 0) {
    return 0;
  }
  
  // Sum all ages
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  
  return totalAge / persons.length;
}

console.log("People in the database:");
console.log("----------------------");

people.forEach(person => {
  console.log(`${person.name}, ${person.age} years old, from ${person.location}`);
});

const averageAge = calculateAverageAge(people);
console.log("\nAverage age calculation:");
console.log("----------------------");
console.log(`Average age: ${averageAge.toFixed(2)} years`);