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

// let num = 1;

// function a() {
//   let a = 1;

//   return function b() {
//     const result = a + 1;
//     a = a + 1;
//     num = num + 1;

//     console.log('Num:', num);

//     return result;
//   };
// }

// const one = a();

// const two = a();

// console.log('One', one()); // 2, num = 2
// console.log('One', one()); // 3, num = 3
// console.log('One', one()); // 4, num = 4

// console.log('Two', two()); // 2, num = 5
// console.log('Two', two()); // 3, num = 6

/* ===================================================================== */

// function closureLoop() {
//   let fnArray = [];
//   let index;

//   for (index = 0; index < 3; index += 1) {
//     fnArray[index] = function () {
//       return index;
//     };
//   }

//   return fnArray;
// }

// const fnArray = closureLoop();

// fnArray.forEach((fn) => console.log(fn())); // 3, 3, 3

/* ===================================================================== */

// function iifeClosureLoop() {
//   let fnArray = [];
//   let index;

//   for (index = 0; index < 3; index += 1) {
//     fnArray[index] = (function (x) {
//       return function () {
//         // It's now following the value of 'x' instead of 'index'. Therefore, the value
//         // won't be shared between the other 3 functions anymore.
//         return x;
//       };
//     })(index);
//   }

//   return fnArray;
// }

// const fnArray = iifeClosureLoop();

// fnArray.forEach((fn) => console.log(fn())); // 0, 1, 2

/* ======================= Getter and Setter ======================= */

// let getValue, setValue;

// (function () {
//   let secret = 0;

//   getValue = function () {
//     return secret;
//   };

//   setValue = function (value) {
//     if (typeof value !== 'number') {
//       throw new Error('Value must be number.');
//     }

//     secret = value;

//     return 'ok';
//   };
// })();

// console.log(getValue()); // 0
// setValue(10);
// console.log(getValue());
// setValue('false'); // Error

/* ======================= Exercises ======================= */

// 1. Write a function that converts hexadecimals colors to RGB value.

function getRGB(hex) {
  const red = parseInt(`${hex[1]}${hex[2]}`, 16);
  const green = parseInt(`${hex[3]}${hex[4]}`, 16);
  const blue = parseInt(`${hex[5]}${hex[6]}`, 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

console.log(getRGB('#000000'));
console.log(getRGB('#FFFFFF'));

// 2. Whatt do each of these following lines print in the console?

console.log(parseInt(1e1)); // 19; 10
console.log(parseInt('1e1')); // 10; 1
console.log(parseFloat('1e1')); // 10; 10
console.log(isFinite(0 / 40)); // true; true
console.log(isFinite(20 / 0)); // true; false
console.log(isNaN(parseInt(NaN))); // true; true

// 3. What does this following code print? (A: 2)
// It results in 2 instead of global value of 1 because of the hoisting behavior
// inside a function. It will scan the whole function body for variables. and assign
// a default value of 'undefined'. Once the hoisting is finished, it will then execute
// from top to bottom. Therefore, function 'f' will have its own 'a' from its own body.
// Then function 'n' will read the 'a' value which belongs to function 'f'.
// It's also affected by how closure works. Since a function defines its closure when
// it's defined, function 'n' will find 'a' from within function 'f' first before
// the global 'a' one.

var a = 1;

function f() {
  function n() {
    console.log(a);
  }
  var a = 2;

  n();
}

f();

// 4. All these examples prints "Boo!". Explain!

// Example 1:
// A: You are basically binding a function to a variable. Therefore, you can use it
// in any way you can use a fucntion, including 'eval' statement.

var ex1f = console.log;
eval('ex1f("Boo!")');

// Example 2:
// A: Again, you are just passing function value around a variable. Same answer as
// example 1.

var ex2e;
var ex2f = console.log;
eval('ex2e=ex2f')('Boo!');

// Example 3:
// A: IIFE that returns a console log function, then invoke it with an argument.

(function () {
  return console.log;
})()('Boo!');
