/* 1. show output : 1-150
2. if the number divisible by 3 then instaed of the number show : -all
3. if the number divisible by 5 then instaed of the number show : -Round
4. if the number divisible by both 3 and 5 then instaed of the number show : -allRounder
*/
  for(let i=1; i <= 50; i++){
    // console.log(i);
    if(i % 3 === 0 && i % 5 === 0){
        console.log("allRound Number:-", i)
    }
    else if(i % 3 === 0){
        console.log("all Number:-", i)
    }
    else if( i % 5 === 0){
        console.log("Round Number:-", i)
    }else{
        console.log(i)
    }
  }