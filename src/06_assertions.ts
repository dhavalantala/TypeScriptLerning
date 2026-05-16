// always do first check and then work with JSON like pars anf stringify

// 1. Define the TypeScript type
type user22 = {id : number; name : string}

// 2. This is an object, NOT a JSON string.
const rawObject = {
    'id' : 1,
    'name' : "Dhaval"
};

// 3. This is a valid JSON string that needs parsing.
const rawJsonString = '{"id": 1, "name": "Dhaval"}';

function isUser(v : unknown): v is user22 {
    return (
        typeof v === 'object' && v !== null &&
        'id' in v && typeof(v as any).id === 'number' && 
        'name' in v && typeof(v as any).name === 'string'
    )
}

// APPROACH A: Validating a raw JavaScript object directly
if (isUser(rawObject)) {
    console.log(rawObject.name); // Safe to use
}


// APPROACH B: Parsing a JSON string first, then validating
// TS treats JSON.parse output as 'any', so we explicitly cast to 'unknown' for safety.
const maybeData = JSON.parse(rawJsonString) as unknown;

if (isUser(maybeData)) {
    console.log(maybeData.name); // TS now knows this is safe and allows it
}