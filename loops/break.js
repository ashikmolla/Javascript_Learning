var number=1;
while (number<=15) {
    // console.log(number)
    number++
    
}
var number=1;
while (number<=15) {
    // console.log(number)
    if (number>10) {
        break
        
    }
    number++
    
}
let friends=['ashik', 'atik', 'akter', 'saiful', 'mohamod', 'allha'];


for (let i = 0; i < friends.length; i++) {

    let friend=friends[i];

    // console.log(i +". "+friend)
    if(friend=="saiful"){
        break
    }
    
}


var numbers=[20, 21, 23, 25, 26, 29, 45, 52, 55, 63, 68, 10];
for(let i=0; i <= numbers.length; i++){
    let number=numbers[i]
    if (number > 52) {
     break   
    }
    console.log(i +'. '+ number);
}


