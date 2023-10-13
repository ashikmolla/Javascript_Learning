/*
function add(first, second){
    // if(second === undefined){
    //     second = 0;
        
    // }
    second=second || 0;
    const sum =first + second;
    return sum;
} */

function add(first =20 , second = 10){
    
    const sum =first + second ;
    return sum;
}
const rasult = add(0, 0);
console.log(rasult)