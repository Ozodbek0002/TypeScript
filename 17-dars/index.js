"use strict";
// 17.Utils #2 (Readonly, ReadonlyArray)
let Y = {
    name: "John",
    age: 30,
};
// Y.age = 25; // Error
// ReadonlyArray  - massiv elementlarini o'zgartirishga ruxsat bermaydi
// const numbers: ReadonlyArray<number> = [1, 2, 3, 4];
// numbers.push(5); // Error
// numbers.pop(); // Error
let a = 12;
// a = 13 // Error
const b = 13;
// b = 14 // Error
let c = [1, 2, 3];
// c.push(4) // Error
class Person {
    constructor() {
        this.name = "John";
        this.age = 30;
    }
}
let person = new Person();
// person.name = "Doe"; // Error
const numbers = [1, 2, 3];
// numbers.push(4); // Error
let numbers2 = [...numbers]; // Copy ReadonlyArray -> Simple Array
numbers2.push(4);
//# sourceMappingURL=index.js.map