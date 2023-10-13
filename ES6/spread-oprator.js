const number=[1, 2, 3, 4, 5, 6, 7,];
// console.log(number)
number.push(9);
// console.log(number)
const number2=[...number]
console.log("number2 :-"+number2)
// console.log(number)

const number3=[44, ...number, 25];
console.log(...number3)