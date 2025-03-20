import { add } from "./math";


abstract class Animal {
    abstract makeSound(): void; // Abstract metod (voris sinfda amalga oshirilishi kerak)

    move(): void {
        console.log("Hayvon harakatlanmoqda...");
    }

    abstract name:string;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Vov-vov!");
    }

    name: string;
}

const myDog = new Dog();
myDog.makeSound(); // "Vov-vov!"
myDog.name = "Sharik";
myDog.move(); // "Hayvon harakatlanmoqda..."


add(1, 2); // 3
