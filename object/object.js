const ashik={
    name:'Ashik Molla',
    color:'black',
    hear:'black',
    eai:'Koromja',
    spece:'nice',
    year:19
}
const keys=Object.keys(ashik);
// console.log(keys)
const value=Object.values(ashik);
// console.log(value)
const pier=Object.entries(ashik)
// console.log(pier)
const toDaimension =[
    [ 'name', 'Ashik Molla' ],
    [ 'color', 'black' ],
    [ 'hear', 'black' ],
    [ 'eai', 'Koromja' ],
    [ 'spece', 'nice' ],
    [ 'year', 19 ]
  ]
//   console.log(toDaimension)
console.log(ashik)
delete ashik.name;// nowo object methed deled
Object.seal(ashik)//  no delete no add new keys:value // yes updeted value
Object.freeze(ashik)//no delete no add new keys:value no updeted value
console.log(ashik)