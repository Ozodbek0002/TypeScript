"use strict";
let numbers = [1, 2, 3, 4, 5];
let strings = ['Hello', 'World'];
let mix = [1, 2, 3, 4, 5, "salom", "dunyo", true];
// console.log(mix);
// Array<T> sintaksisi:
let Cars = ['Audi', 'BMW', 'Chevrolet', 'Dodge', 'Ford'];
// JS dagi Array metodlarni hammasi TypeScriptda ham ishlaydi:
// Cars.push('Honda');
// Cars.pop();
// Cars.shift();
// Cars.unshift('Toyota');
// Cars.splice(2, 0, 'Mazda');
// console.log(Cars);
// Cars.forEach(   car => console.log(car)   );
// Tuple (Tuples)
let tuple = ['Salom', 2021, true];
// tuple = ['Hello', true, 123];
// tuple = ['Hello', 123];
tuple.push('Dunyo');
let Person = [1, 'John Doe', true];
// Enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 23] = "Green";
    Colors[Colors["Blue"] = 24] = "Blue";
})(Colors || (Colors = {}));
let MyColor = Colors.Green;
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
let responseStatus = Status.Success;
console.log(responseStatus); // 200
// Reverse mapping (orqaga chaqirish):
console.log(Status[200]); // Success
console.log(Status["Success"]); // 200
// Hujjatli Enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let move = Direction.Left;
console.log(move); // "LEFT"
//# sourceMappingURL=index.js.map