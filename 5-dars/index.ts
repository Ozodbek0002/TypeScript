// let numbers:number[] = [1, 2, 3, 4, 5];
// let strings:string[] = ['Hello', 'World'];
// let mix: (string | number | boolean)[] = [1, 2, 3, 4, 5,"salom","dunyo",true];

// // console.log(mix);

// // Array<T> sintaksisi:
// let Cars:Array<string> = ['Audi', 'BMW', 'Chevrolet', 'Dodge', 'Ford'];

// // JS dagi Array metodlarni hammasi TypeScriptda ham ishlaydi:
// // Cars.push('Honda');
// // Cars.pop();
// // Cars.shift();
// // Cars.unshift('Toyota');
// // Cars.splice(2, 0, 'Mazda');


// // console.log(Cars);

// // Cars.forEach(   car => console.log(car)   );



// // Tuple (Tuples)

// let tuple: [string, number, boolean] = ['Salom', 2021, true];
// // tuple = ['Hello', true, 123];
// // tuple = ['Hello', 123];

// tuple.push('Dunyo');

// // console.log(  tuple);

// type User = [number, string, boolean];

// let Person:User = [1, 'John Doe', true];



// // Enums

// enum Colors {
//     Red ,
//     Green = 23,
//     Blue
// }

// let MyColor:Colors = Colors.Green;

// enum Status {
//     Success = 200,
//     NotFound = 404,
//     ServerError = 500
// }
// let responseStatus: Status = Status.Success;

// console.log(responseStatus); // 200

// // Reverse mapping (orqaga chaqirish):

// console.log(Status[200]); // Success
// console.log(Status["Success"]); // 200



// // Hujjatli Enum
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
// }

// let move: Direction = Direction.Left;
// console.log(move); // "LEFT"







let Bosh = undefined;

let Bosh1
let Bosh2 = 0;

if( Bosh == null){
    console.log("Vaqtincha bosh");
    
}


