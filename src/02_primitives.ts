let username:string = `Dhaval Antala`;
let age : number = 28;
let isCreater:boolean = true;

const big : bigint = 2n ** 63n -1n;

// // You cannot combine the bigint with int
// const mixed = big + age 


const TOKEN : unique symbol = Symbol('TOKON')

function yearsToay(years : number) : number {
    return years * 365
} 

console.log(username.toUpperCase())
console.log(yearsToay(4))