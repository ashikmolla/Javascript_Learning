


// -----recursion sum
for (let i = 0; i <= 5; i++) {
    // console.log(i)
}
for (let i = 5; i >= 0; i--) {
    // console.log(i)
}



function sum(i) {
    if (i === 1) {
        return 1;
    }
    console.log(i);
    return i + sum(i - 1)
}
// const rasult= sum(6);
// console.log(rasult);

/* 
5+sum(4)
5+4+sum(3)
5+4+3+sum(2)
5+4+3+2+sum(1)
5+4+3+2+1
*/



// recursion factorial

/*
let factorial=1;
 for(let i=5; i >= 1; i--){
    factorial=factorial * i;
    // console.log(factorial)
 }
 */

 function factorial(i){
     console.log(i)
    if(i==1){
        return i;
    }
    return i* factorial(i-1);
 }
 factorial(5)