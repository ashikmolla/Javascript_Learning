
var numbers=[20, 21, 23, 25, 26, 29, 45, 52, 55, 63, 68, 10];
for(let i=0; i <= numbers.length; i++){
    let number=numbers[i]
    if (number > 52) {
     continue   
    }
    console.log(i +'. '+ number);
}
