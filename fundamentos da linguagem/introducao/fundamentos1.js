const n = 1;

console.log(n);

const peso1 = 10;
const peso2 = 20;

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
console.log(Number.isInteger(peso1/peso2));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log((peso1/peso2).toFixed(2));
console.log((peso1/peso2).toPrecision(3));

console.log((peso1/peso2).toString());
console.log(Number.MAX_VALUE.toString(2)); // vlr binario
console.log(Number.MAX_VALUE.toString(8)); // vlr octal
console.log(Number.MAX_VALUE.toString(16)); // vlr hexa
console.log(typeof (peso1/peso2).toString());



