// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// funcOne()

// //1.1
//the value of a is 3

//1.2 
//error will be (Assignment to constant variable)

// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

//2.2
// if the variable is declared the alert will view 0 first then 5



// function funcFour() {
//     window.a = "hello";
// }

//3

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
// funcFour()
// funcFive()
// ==> inside the funcFive function hello

//4

// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// funcSix()

// ==>  inside the funcSix test

// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// inside 5 && outside 2