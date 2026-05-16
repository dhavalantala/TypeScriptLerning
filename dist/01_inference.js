"use strict";
// Goal => Understand when to let TS infer types and when to explicitly annotate them
// ts => JS very well
Object.defineProperty(exports, "__esModule", { value: true });
let count = 0; // TS infers count as number 
const site = "TypeScript"; // TS infers site as string
const score = [10, 20, 30, 40];
function add(a, b) {
    return a + b; // TS infers the return type as number
}
const add1 = (a, b) => {
    return a + b;
};
const minus = (a, b) => {
    return a - b;
};
const divide = (a, b) => {
    return a / b;
};
// console.log(add('5', 4))             //  above we have already define that paramaters are number but we give string and number.
// You should also annotate when the type is not obvious; 
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
//# sourceMappingURL=01_inference.js.map