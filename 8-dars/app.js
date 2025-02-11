"use strict";
// interfacedan class yaratish
class Studentt {
    constructor() {
        this.name = "Javohir";
        this.age = 20;
        this.weight = 70;
        this.height = 180; // Ixtiyor ozgaruvchi
        this.course = 3;
    }
    Hello() {
        console.log("Salom");
    }
}
// interface dan obyekt yaratish
let MyStudent = {
    name: "Javohir",
    age: 20,
    weight: 70,
    Hello() {
        console.log("Salom");
    },
};
// console.log(MyStudent.Hello());
// interface Animal {
//   name: string;
// }
// interface Dog extends Animal {
//   voise(): void;
// }
// const myDog: Dog = {
//   name: "Rex",
//   voise: () => console.log("Woof!"),
// };
// type Animal = {
//   name: string;
// };
// type Dog = Animal & {
//     voise: () => void;
// };
// const myDog: Dog = {
//   name: "Rex",
//   voise: () => console.log("Woof!"),
// };
class Dogs {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let Mydog = new Dogs('Rex', 3);
console.log(Mydog.name);
//# sourceMappingURL=app.js.map