const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const color = () => {
    colors.forEach((color, index) => {
     console.log(`The #${index+1} choice is ${color}`);
    });
    if (colors.find(color => color === "Violet")) {
     return "Yes";
    }
     return "No";
 }
 console.log(color());