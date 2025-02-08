// Inheritance

class Personnn {
    name:string;
    age:number;

    constructor(_name:string, _age:number) {
        this.name = _name;
        this.age = _age;
    }

    getInfo():void {
        console.log(`Hello my name is: ${this.name}, I am ${this.age} years old.`);
    }

}


class Student  extends Personnn {
    cource:number;
    group:string;
    intoduction:string = 'Dasturiy injiniring'; // faqat classga tegishli bo'ladi
    static stependia:number = 615000; // faqat classga tegishli bo'ladi


    constructor(_name:string, _age:number,_course:number, _group:string) {
        super(_name, _age); // otasini constructorini chaqirish
        this.cource = _course;
        this.group = _group;
    }

    getInfo():void {
        super.getInfo(); // otasini metodini chaqirish
        console.log(`I am studying in ${this.cource} course, in ${this.group} group.`);
    }

    static getStipendia():void { // faqat classga tegishli bo'ladi
        console.log(`O'qish uchun sizga ${Student.stependia} so'm mablag' beriladi.`);
    }
   

}



let person1 = new Student('Hasan', 20,4,'942-20');


console.log(person1.getInfo);


// Static ozgaruvchilarni yoki funksiyani korish uchun togridan togri class ga murojat qilish kerak bo'ladi.
console.log(Student.stependia);
console.log(Student.getStipendia());



