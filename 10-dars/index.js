"use strict";
class Car {
    constructor(model, name) {
        this.model = model;
        this.name = name;
    }
    drive() {
        console.log(`${this.model} is driving`);
    }
}
class MyCar extends Car {
    constructor() {
        super(...arguments);
        this.probeg = 0;
    }
}
let myCar = new MyCar("Chevralet", "Gentra");
console.log(myCar.model);
console.log(myCar.name);
console.log(myCar.probeg);
const car = new Car("Tesla", "Model S");
console.log(car.model); // ✅ Ruxsat beriladi
console.log(car.name); // ✅ Ruxsat
car.drive(); // ✅ Ruxsat beriladi
//   Private
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
    getBalance2() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // ✅ Ruxsat beriladi
//   console.log(account.balance);    // ❌ Xato: 'balance' private
// account.getBalance2(); // ❌ Xato: 'balance' private
// protected
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`); // ✅ Ruxsat beriladi, chunki subclass ichida
    }
}
const dog = new Dog("Rex");
//   console.log(dog.name); // ❌ Xato: 'name' protected
dog.bark(); // ✅ Ruxsat beriladi
//# sourceMappingURL=index.js.map