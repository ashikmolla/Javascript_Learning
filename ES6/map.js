
const numbers =[14,56,82,45,24,87,100,210,31,88,43,88,65,101,56,76,79,201,43,97,91,1,4];
const half=numbers.map(n=>n/2);
// console.log(half)
const friends =['ashik', 'atik', 'tom', 'bom', 'tamim', 'shgakib' ];
const friendNameFirstLeter=friends.map(p=>p[0]);
// console.log(friendNameFirstLeter)

const nameLangth =friends.map(p=>p.length);
// console.log(nameLangth);

const colick =[
    { name:"Ashik molla",roll:585, reg:5955,},
    { name:"Atik molla",roll:555, reg:5524955,},
    { name:"Arman molla",roll:535, reg:595455,}
]
const colickName = colick.map(name=>name.name);
console.log(colickName)



