const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

const country = "USA";
console.log([...country]);

let newArray = [...[,,]];
console.log(newArray);

/**(6) ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']0: "bread"1: "carrot"2: "potato"3: "chicken"4: "apple"5: "orange"length: 6[[Prototype]]: Array(0)
 ['U', 'S', 'A']0: "U"1: "S"2: "A"length: 3[[Prototype]]: Array(0)
[undefined, undefined] */