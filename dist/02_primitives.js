"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = `Dhaval Antala`;
let age = 28;
let isCreater = true;
const big = 2n ** 63n - 1n;
// // You cannot combine the bigint with int
// const mixed = big + age 
const TOKEN = Symbol('TOKON');
function yearsToay(years) {
    return years * 365;
}
console.log(username.toUpperCase());
console.log(yearsToay(4));
//# sourceMappingURL=02_primitives.js.map