// email? : string -> email maybe be absent, if its present it will be string
// It is not same as email : string | undefined 

type User = {
    id : string                     // required
    name : string 
    email? : string                 // Option(could be present)
    readonly createdAt : Date | string       // Can not be reassigned
}

// const user1 : User = {id : '1', name : 'Dhaval', createdAt : new Date()}
// const user1 : User = {id : '1', name : 'Dhaval', createdAt : new Date().toLocaleTimeString()}
const user1 : User = {id : '1', name : 'Dhaval', createdAt : new Date().toLocaleDateString()}
const user3 : User = {id : '2', name : 'Dhaval', createdAt : new Date().toLocaleDateString()}

console.log(user1, user3)

type User1 = {
    id : string                     // required
    name : string 
    email : string                  // must be
    readonly createdAt : Date | string       // Can not be reassigned
}

const user2 : User1 = {id : '1', email : `antala@gmail.com`,name : 'Dhaval', createdAt : new Date()}
console.log(user2)


type Count = {[k : string] : number}
type Count1 = Record<`likes` | 'view' | 'shares', number>

const c : Count = {whatever : 1}
const c1 : Count1 = {likes : 1, view : 2, shares : 3}
console.log(c)
console.log(c1)

