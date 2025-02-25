namespace Utils {
  export function log(text: string, color: string, fontsize: number): void {
    console.log(`%c${text}`, `color:${color};font-size:${fontsize}px;`);
  }

  //   log("Salom bu rangli matn", "blue", 40);
}

//Utils.log("Salom bu rangli matn", "silver", 40); // Error: Property 'log' does not exist on type 'typeof Utils'

namespace Animals {
  export abstract class Animal {
    constructor(protected name: string) {}

    abstract say(): void;
  }
}

namespace Animals {
  export class Tigr extends Animals.Animal {
    constructor(name: string, private sound: string) {
      super(name);
    }

    say() {
      Utils.log(`${this.name} -  ${this.sound}`, "green", 30);
    }
  }
}



let MyTigr = new Animals.Tigr("Sherbek","RRRRRRR")

MyTigr.say();
