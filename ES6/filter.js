const numbers =[14,56,82,45,24,87,100,210,31,88,43,88,65,101,56,76,79,201,43,97,91,1,4];
const lowNumber =numbers.filter(numbers => numbers >80);
const highNumber  =numbers.filter(numbers => numbers < 80);
const find = numbers.filter(f => f % 5 === 0)

console.log(lowNumber, highNumber, find);
const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];