console.log('Chapter 04: Objects\n');
console.log('/* ===================== */\n');

/* ===================================================================== */

/* ======================= Constructor Function ======================= */

function Hero(name) {
  this.name = name;
  this.occupation = 'Ninja';
  this.whoAreYou = function whoAreYou() {
    return `I am ${this.name}, and I am a ${this.occupation}`;
  };
}

const hiiro = new Hero('Hiiro');
const nakamura = new Hero('Nakamura');

console.log(hiiro.whoAreYou());
console.log(nakamura.whoAreYou());
