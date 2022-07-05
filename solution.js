/* 1 */
console.log(1);
console.log ("NaN is short for Not a Number");


console.log(1.1);
console.log(isNaN(hello));
console.log(isNaN(3));
console.log("String is the type of NaN");


/* 2 */
console.log(2);
console.log(0.1 * 0.2);
numb = (0.1 * 0.2).toFixed(2);
console.log(numb);


var numb = 0.1 * 0.2;
var rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
console.log(rounded);

/* 3 */
console.log(3);
let x = Number.POSITIVE_INFINITY; 
console.log(x / 0);
console.log(x / x);
console.log(1 / 0);


