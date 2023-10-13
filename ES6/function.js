//  function declearetion
 function add(first, second){
    const total = first + second;
    return total;
 }

 // function expression
 const add1 =function add1(first, second){
   const total = first + second;
   return total;
 }
 // function expression with anonymous function
 const add2 =function (first, second){
   const total = first + second;
   return total;
 }
 // function anonyymos  short cart
 const add3 =function (first, second){
   return first + second;
 }

 /*------------------
  arrow fi=unction
------------------*/

const add4 =(first, second) => first + second; //wow 

 const result =add4(10, 20);
 console.log(result)