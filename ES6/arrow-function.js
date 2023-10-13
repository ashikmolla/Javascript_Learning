 const add =(first, second) => first + second;
 const fullName =(first, second) => first +" " + second;
 const multiply = (a, b) => a * b;

 const resultMulti=multiply(4,5);


 const addAll=(a, b, c, d )=>a + b + c + d;

//  no paramiter arrow function 
const value =()=>3.4;
 // one peramiter
 const double=(num)=>num * 5;

 // one peramiter simole version
 const doubleItem = num => num * 4;



/*------------------
 mulati line arrow function
 ----------------------------*/
 const multilineArrowFunction=(a, b, c)=>{
    const first=a+b+c;
    const second=first/3;
    const third=second-3;
    return third;
 }
 const result=multilineArrowFunction(3, 3, 3);
 console.log(result)