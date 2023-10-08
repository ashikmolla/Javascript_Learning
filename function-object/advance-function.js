function inciToFeet(inches){
    const feetes=inches/12;
    return feetes;

}
const fatherDivetion=inciToFeet(100);
// console.log(fatherDivetion)

//   -----------chack event number in function
 function eventNumber(number){
    const event =number%2;
    if(event === 0){
        return true;
    }else{
        return false;
    }

 }
//  console.log(eventNumber(11));

// ---============-  check is leap year
 function leapyer(number){
     chackLeapYer =number % 4;
     if(chackLeapYer === 0){
        return " this number is Leap Year"
     }else{
        return " this number is Not Leap Year"
     }

 } 
//  console.log(leapyer(2021));



// ---------------------------- sum of array all numvers

 function sumOfArrayNumber(number){
     let sum=0
    for(let i=0; i < number.length; i++ ){
        const index =i;
        const elemant =number[i];
        sum=sum + elemant
        // console.log(index, elemant,':-', sum)
    }
 }
 

//  -------------sum of array all Odd numvers
function sumOfArrayOddNumber(numver){
    const oddNumver=[]
    let sum=0;
    for(let i=0; i< numver.length; i++){
        const index=i;
        const elemant=numver[i];
        if(elemant % 2 !==0){

            oddNumver.push(elemant)
            // console.log(index, elemant);
        }
        sum=sum + elemant;
        // console.log(index, elemant+":-"+sum)

    }
    return oddNumver;
}


const myNumber=[5, 6, 8, 9, 10, 20, 30, 40, 50, 60];
 sumOfArrayNumber(myNumber)

 
 const oddNumbers=sumOfArrayOddNumber(myNumber);
//  console.log(oddNumbers)




//   AVARAGE NUMBER factorial in function
function factorial(number){
    var rasult=1;
    for(let i =number; i >= 1; i--){

        rasult  =rasult * i;

    }
    return rasult;
}
 const fact =factorial(9);
 console.log(fact)





