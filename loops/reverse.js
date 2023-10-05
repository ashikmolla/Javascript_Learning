//  reverse way while loops



var number=10;
while (number >= -10) {
    // console.log(number);
    number--
    
}
//  reverse way for loops

for (var i=10; i>= -10;  i--) {
    // console.log(i);
   
    
}
//  reverse way for loops in array
var numbers =[20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(numbers.length)
for (let i = numbers.length; i >= 0; i--) {
    const number = numbers[i];
    console.log(i +". " +number)
    
}