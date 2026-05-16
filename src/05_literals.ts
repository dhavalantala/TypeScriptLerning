type Direction = `left` | `right` | `up`;


function move(d:Direction) {
    console.log(d);
}


// TypeScript accepts this because 'const' creates a read-only variable.
// TS infers the type of d1 as the literal string 'left', which matches the Direction type.
const d1 = 'left';          
move(d1);                // TS accept it bacuse we have assign variable into const

// TypeScript rejects this because 'let' creates a changeable variable.
// TS infers the type of d2 as a general 'string', which is too broad for the Direction type.
let d2 = 'left';
// move(d2)                    // Error: Argument of type 'string' is not assignable to parameter of type 'Direction'.


// TS accepts this because we explicitly declared the type as 'Direction'.
// This prevents TypeScript from widening the type to a general string.
let d3 : Direction = 'left'
move(d3)