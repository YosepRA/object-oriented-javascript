/* ======================= String Template Literals ======================= */

function transform(strings, ...substitutes) {
  console.log(strings[0]);
  console.log(substitutes[0]);
}

const firstName = 'James';
const lastName = 'Bond';

transform`Name is ${lastName}, ${firstName} ${lastName}`;

function rawTag(strings, ...substitutes) {
  console.log(strings);
  console.log(strings.raw);
  console.log(strings.raw[0]);
}

rawTag`This is a raw text and \n are not treated differently`;
//This is a raw text and \n are not treated differently
