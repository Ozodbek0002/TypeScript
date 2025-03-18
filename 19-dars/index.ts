// 19.Utils #4 Parameters, ConstructorParameters, ReturnType, InstanceType


//====================================================================================================
// 1. Parameters
function add(a:number, b:number): number {
    return a + b;
}

type Add = typeof add;  // (a: number, b: number) => number
type Add2 = Parameters<Add>; // [a: number, b: number]


//====================================================================================================
// 2. ConstructorParameters

class User {
    constructor(public name: string, public age: number) {}
}
 type user = typeof User; //{new(name: string, age: number): User}
type user2 = ConstructorParameters<user>; // [name: string, age: number]
 

//====================================================================================================
// 3. ReturnType

function addd(a: number, b: number): number {
    return a + b; // number
}

type Addd = typeof addd; // (a: number, b: number) => number
type Addd2 = ReturnType<Addd>; // number


//====================================================================================================
// 4. InstanceType

class User2 {
    constructor(public name: string, public age: number) {}
}

type User3 = InstanceType<typeof User2>; // User2

// let user3: User3 = {
//     name: 'John',
//     age: 30
// }



