

// // stricktNullCheck
// let title : string = 'intro';
// title = undefined

let subtitle : string | undefined = undefined;


// // void => function doesn't return any usefull values
function log(msg:string) :void {
    console.log(msg);
};

// // never return 
function fail(msg:string) {
    throw new Error(msg)
}

// // Do not use any 

const valueAny : any = JSON.parse(`{'x' : 1}`);

valueAny.notThere.toFixed(2);                   // This compile but can break / explode at runtime