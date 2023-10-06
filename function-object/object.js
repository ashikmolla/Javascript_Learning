var ashik={
    name:'Ashik',
    roll:4000,
    reg:2545,
}
// when you know the specific propertes name . then use dot notation to get the property value
// console.log(ashik)
// console.log(ashik.name)
// console.log(ashik["reg"])
//   terget value first system for full object
var allObject=ashik;
// second system single vule
var value1=ashik.name;
// three system single vule
var value2=ashik['name'];
// 4
var ashikProperties =Object.keys(ashik)
// 5
var ashikValue =Object.values(ashik)
// 1
// console.log(allObject)
// 2
// console.log(value1)
// 3
// console.log(value2)
// 4
// console.log(ashikProperties)
// 5
// console.log(ashikValue)


var younus={
    name:'Younos Mia',
    work:'Student',
    roll:10

}
// console.log(younus.roll, younus.name);
younus.roll=12;
younus.name="Younus Mia";
// console.log(younus.roll, younus.name);



var ahmadullh={
    name:"Ahmad Ullha",
    addres:"comilla bangladesh",
    roll: 482984,
    reg:1502078539
}
const keys=Object.keys(ahmadullh);
// console.log(keys)
const value=Object.values(ahmadullh);
// console.log(value)
// for loop in object
for(var i=0; i<keys.length; i++){
    var propertesName=keys[i];
    var propertesValue=ahmadullh[propertesName];
    // console.log(propertesName, propertesValue)

}


// for in loops  object
for(propertesName in ahmadullh) {
    const values= ahmadullh[propertesName]
    console.log(propertesName+" :"+ values)
}





