/* ======================= Functions ======================= */

/* ===================================================================== */

/* ======================= Block Scope ======================= */

// function swap(a, b) {
//   if (a > 0 && b > 0) {
//     let tmp = a;
//     a = b;
//     b = tmp;
//   }

//   console.log(a, b);
//   console.log(typeof tmp === 'undefined');

//   return [a, b];
// }

// console.log(swap(1, 2)); // [2, 1]

/* ======================= Callback Examples ======================= */

// function multiplyByTwo(a, b, c, callback) {
//   const ar = [];

//   for (let index = 0; index < 3; index += 1) {
//     ar[index] = callback(arguments[index] * 2);
//   }

//   return ar;
// }

// function addOne(data) {
//   return data + 1;
// }

// console.log(multiplyByTwo(1, 2, 3, addOne));

// function map(data, fn) {
//   const result = [];

//   for (let index = 0; index < data.length; index += 1) {
//     const current = data[index];

//     result[index] = fn(current);
//   }

//   return result;
// }

// function multiplyByThree(data) {
//   return data * 3;
// }

// console.log(map([1, 2, 3], (data) => data * 4));

/* ======================= Closure ======================= */

let num = 1;

function a() {
  let a = 1;

  return function b() {
    const result = a + 1;
    a = a + 1;
    num = num + 1;

    console.log('Num:', num);

    return result;
  };
}

const one = a();

const two = a();

console.log('One', one()); // 2, num = 2
console.log('One', one()); // 3, num = 3
console.log('One', one()); // 4, num = 4

console.log('Two', two()); // 2, num = 5
console.log('Two', two()); // 3, num = 6
