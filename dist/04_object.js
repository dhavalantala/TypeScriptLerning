"use strict";
// email? : string -> email maybe be absent, if its present it will be string
// It is not same as email : string | undefined 
Object.defineProperty(exports, "__esModule", { value: true });
// const user1 : User = {id : '1', name : 'Dhaval', createdAt : new Date()}
// const user1 : User = {id : '1', name : 'Dhaval', createdAt : new Date().toLocaleTimeString()}
const user1 = { id: '1', name: 'Dhaval', createdAt: new Date().toLocaleDateString() };
const user3 = { id: '2', name: 'Dhaval', createdAt: new Date().toLocaleDateString() };
console.log(user1, user3);
const user2 = { id: '1', email: `antala@gmail.com`, name: 'Dhaval', createdAt: new Date() };
console.log(user2);
const c = { whatever: 1 };
const c1 = { likes: 1, view: 2, shares: 3 };
console.log(c);
console.log(c1);
//# sourceMappingURL=04_object.js.map