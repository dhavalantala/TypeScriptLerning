// Goal => Understand when to let TS infer types and when to explicitly annotate them
// ts => JS very well

let count = 0;                  // TS infers count as number 
const site = "TypeScript";      // TS infers site as string
const score = [10, 20, 30, 40];


function add (a:number, b:number) : number {   // Explicitly annotating the return type as number
    return a + b;              // TS infers the return type as number
}


const add1 = (a: number, b: number): number => {
    return a + b;
};

const minus = (a : number, b : number) : number => {
    return a - b
};


const divide = (a : number, b : number) : number => {
    return a / b
};

// console.log(add('5', 4))             //  above we have already define that paramaters are number but we give string and number.
 

// You should also annotate when the type is not obvious; 

let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;