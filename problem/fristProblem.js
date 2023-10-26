/*
// --------------1

function feetToInch(number){
  const feet=number*12;
  return feet
}
console.log(feetToInch(10))
*/
// ----------- 2


/*
function centimeterToMeter(number){
    const  convertMetter = number/100;
    console.log('Metter := ',convertMetter)
}
centimeterToMeter(300)
*/




// 3

/*
function paperRequirements ( firstBook, secondBook, thardBook){
 const firstBookCost = firstBook*100;
 const secondBookCost = secondBook*200;
 const thardBookCost = thardBook*300;
 console.log('1st Book total cost :- ', firstBookCost ,'tk')
 console.log('2nd Book total cost :- ', secondBookCost ,'tk')
 console.log('3rd Book total cost :- ', thardBookCost ,'tk')

}
paperRequirements (3, 3, 3)

*/
// -------------------no solving  next time try
// 4
//---------------------
//  const friendes =['Ashik', 'Atik', 'Ridoy', 'mehadi', 'Ahmad', 'Eoynos mia'];



// --------------5
/*
const numbers = [1, 3, 55, 8, 9, 8, 10, 0, 1, 20]
let upperNumber = []
for (let number of numbers) {
  console.log(number)
  if(number <=0 ){
    return ;
  }else{
    upperNumber.push(number)
  }

}
console.log( " number", upperNumber)
*/


/**----------------------------
 *
 *
 *
 *  assinment problem
 *
 *
 *
 *
 * ---------------------------*/
// Problem 1:
/*
function mindGame(number){
 const multi= number * 3;
 const add = multi +10;
 const diVet = add / 2;
 const sub=diVet-5;

 return sub;

}
const result = mindGame(33);
console.log(result)
*/


// Problem 2: Finding even or odd

/*
 function evenOdd(string){
  const callet = string.length;
  if(callet % 2 ===0){
    console.log(" even")
  }else{
    console.log('add')
  }

 }
 evenOdd("Batch7")

*/



// Problem 3: Is Less or Greater than seven
/*

function isLGSeven(number){
  const addaNumber = number-7;
  if(addaNumber < 7){
    return addaNumber
  }else{
    return number + number
  }

}
console.log(isLGSeven(-15))

*/

// Problem 4: Finding Bad data done

/*
const arrays =  [ -4, -9, -5, -33, -55 ]

function findingBadData(numbers) {
  const negative = [];
  const positive = []
  for (let number of numbers) {

    if (number < 0) {
      negative.push(number)
    } else {
      positive.push(number)
    }

  }
  // console.log(`negative Number ${negative}  positive ${positive}`)
  return negative.length;

}
console.log(findingBadData(arrays))
*/


// Problem 5: Convert your gems into diamond      done


/*


function gemsToDiamond(a, b, c){

 const firstFriend=21*a;
 const secondFriend=32*b;
 const thirdFridend=43*c;
 const totalDiamond=firstFriend + secondFriend + thirdFridend;
 if(totalDiamond > 2000 ){
   const resiveDimond = totalDiamond - 2000;
   return resiveDimond;
 } else{
   return totalDiamond;
 }
}
console.log(gemsToDiamond(20, 200, 50))



*/














