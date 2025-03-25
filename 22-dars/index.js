"use strict";
// 22. BigInt vs Number 
let aa = 900719925474055559100;
// console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
let bb = 900719925474055559100n;
console.log(aa + 2); // 900719925474055559100
console.log(bb + 2n); // 900719925474055559102n
console.log(123n); // ✅ 222n
console.log(2n + 53n); //  ✅ 55n
// console.log(2n +  53); // ❌ 55n
let cc = 222;
// cc:BigInt = 123n; // ❌
// cc as BigInt; // ❌
// cc.BigInt; // ❌ 222.BigInt
BigInt(cc); // ✅ 222n
// let dd: bigint = 222.4n; // ❌
// let dd: number = 222.4; // ✅
//# sourceMappingURL=index.js.map