/* ======================= String Template Literals ======================= */

// function transform(strings, ...substitutes) {
//   console.log(strings[0]);
//   console.log(substitutes[0]);
// }

// const firstName = 'James';
// const lastName = 'Bond';

// transform`Name is ${lastName}, ${firstName} ${lastName}`;

// function rawTag(strings, ...substitutes) {
//   console.log(strings);
//   console.log(strings.raw);
//   console.log(strings.raw[0]);
// }

// rawTag`This is a raw text and \n are not treated differently`;
// //This is a raw text and \n are not treated differently

/* ======================= Loops ======================= */

// // Draw a snowflake.
// let res = '\n';

// for (let i = 1; i <= 7; i += 1) {
//   for (let j = 1; j <= 15; j += 1) {
//     res += (i * j) % 8 ? ' ' : '*';
//   }

//   res += '\n';
// }

// console.log(res);

/* ======================= Exercises ======================= */

// 1. What is the result of executing each of these lines?

let a;
console.log(typeof a); // 'undefined'

let s = '1s';
console.log(s++); // NaN

console.log(!!'false'); // true

console.log(!!undefined); // false

console.log(typeof -Infinity); // Number

console.log(10 % '0'); // NaN

console.log(undefined == null); // false

console.log(false === ''); // false

console.log(typeof '2E+2'); // 'string'

a = 3e3;
console.log(a++); // 3001

// 2. What is the value of 'v' after the following?

let v;

v = 100; // 100
// v = 0; // 10
// v = null; // 10

v = v || 10;

// 3. Write a program to print multiplication table!

for (let i = 1; i <= 10; i += 1) {
  for (let j = 1; j <= 10; j += 1) {
    console.log(`${i} x ${j} = ${i * j}\n`);
  }
}
