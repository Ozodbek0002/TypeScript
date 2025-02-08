"use strict";
// Inheritance
class Personnn {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    getInfo() {
        console.log(`Hello my name is: ${this.name}, I am ${this.age} years old.`);
    }
}
class Student extends Personnn {
    constructor(_name, _age, _course, _group) {
        super(_name, _age); // otasini constructorini chaqirish
        this.intoduction = 'Dasturiy injiniring'; // faqat classga tegishli bo'ladi
        this.cource = _course;
        this.group = _group;
    }
    getInfo() {
        super.getInfo(); // otasini metodini chaqirish
        console.log(`I am studying in ${this.cource} course, in ${this.group} group.`);
    }
    static getStipendia() {
        console.log(`O'qish uchun sizga ${Student.stependia} so'm mablag' beriladi.`);
    }
}
Student.stependia = 615000; // faqat classga tegishli bo'ladi
let person1 = new Student('Hasan', 20, 4, '942-20');
console.log(person1.getInfo);
// Static ozgaruvchilarni yoki funksiyani korish uchun togridan togri class ga murojat qilish kerak bo'ladi.
console.log(Student.stependia);
console.log(Student.getStipendia());
//# sourceMappingURL=index.js.map