const topi={ color:'yellw', price:20, isCline:true, quantite:60}

// object can'not apply in for of 
// for(const valu of topi){
//     console.log(valu)
// }

const keys=Object.keys(topi);
// console.log(keys)

// collect to object key 
for(const key of keys){
    // console.log(key, topi[key])
}
// right way 
for (const key in topi){
    // console.log(key, topi[key])
}


//  advance system 
const pair =Object.entries(topi);
// console.log(pair)
 for(const [key, value] of Object.entries(topi)){
console.log(key, value)
 }