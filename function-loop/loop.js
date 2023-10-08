for(let i= 0; i <=5; i++){
    // console.log(i)
}
for(let i= 5; i >=0; i--){
    // console.log(i)
}



function sum(i){
    if(i===1){
        return 1;
    }
    console.log(i);
    return i+ sum(i-1)
}
// const rasult= sum(6);
// console.log(rasult);