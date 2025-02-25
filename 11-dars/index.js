"use strict";
var Utils;
(function (Utils) {
    function log(text, color, fontsize) {
        console.log(`%c${text}`, `color:${color};font-size:${fontsize}px;`);
    }
    Utils.log = log;
    //   log("Salom bu rangli matn", "blue", 40);
})(Utils || (Utils = {}));
//Utils.log("Salom bu rangli matn", "silver", 40); // Error: Property 'log' does not exist on type 'typeof Utils'
var Animals;
(function (Animals) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    Animals.Animal = Animal;
})(Animals || (Animals = {}));
(function (Animals) {
    class Tigr extends Animals.Animal {
        constructor(name, sound) {
            super(name);
            this.sound = sound;
        }
        say() {
            Utils.log(`${this.name} -  ${this.sound}`, "green", 30);
        }
    }
    Animals.Tigr = Tigr;
})(Animals || (Animals = {}));
let MyTigr = new Animals.Tigr("Sherbek", "RRRRRRR");
MyTigr.say();
//# sourceMappingURL=index.js.map