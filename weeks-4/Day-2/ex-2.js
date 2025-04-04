const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
const color = () => {
  colors.forEach((col, i) => {
    let ini;
    if (i === 0) {
      ini = ordinal[1];
    } else if (i === 1) {
      ini = ordinal[2];
    } else if (i === 2) {
      ini = ordinal[3];
    } else {
      ini = ordinal[0];
    }
    console.log(`${i + 1}${ini} choice is ${col}`);
  });
}
color();