"use strict";
// // stricktNullCheck
// let title : string = 'intro';
// title = undefined
Object.defineProperty(exports, "__esModule", { value: true });
let subtitle = undefined;
// // void => function doesn't return any usefull values
function log(msg) {
    console.log(msg);
}
;
// // never return 
function fail(msg) {
    throw new Error(msg);
}
// // Do not use any 
const valueAny = JSON.parse(`{'x' : 1}`);
valueAny.notThere.toFixed(2); // This compile but can break / explode at runtime
//# sourceMappingURL=03_sppecial.js.map