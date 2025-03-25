"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
class Animal {
    move() {
        console.log("Hayvon harakatlanmoqda...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Vov-vov!");
    }
}
const myDog = new Dog();
myDog.makeSound(); // "Vov-vov!"
myDog.name = "Sharik";
myDog.move(); // "Hayvon harakatlanmoqda..."
(0, math_1.add)(1, 2); // 3
//# sourceMappingURL=index.js.map