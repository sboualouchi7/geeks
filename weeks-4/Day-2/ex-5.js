const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((a, b) => {
  return `${a} ${b}`;
});

console.log(combinedString);