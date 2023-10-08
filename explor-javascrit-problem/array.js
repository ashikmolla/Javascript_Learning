const countray = "Bangladesh";
const age = 25;
const isIndependent = true;
const student = { id: 12, class: 11, name: "ashik" };
const friend = [13, 12, 54, 87, 65, 4];
function add(num1, num2) {
    return num1 + num2;
}
/// type chack
console.log(typeof countray)
console.log(typeof age)
console.log(typeof isIndependent)
console.log(typeof student)
console.log(typeof friend)
console.log(Array.isArray(friend))
console.log(typeof add)




// kon akta jinis array ar modda ase ki nai seta dekhar jonno :- includes 



// console.log(friend.includes(10))
// console.log(friend.includes(12))
// const newFriends=[50, 64, 58]; 
// const allfriends=newFriends.concat(friend);
// console.log(allfriends)

//---------------slice
// Returns a copy of a section of an array. For both start and end, 
// a negative index can be used to indicate an offset from the end of the array. For example,
//  -2 refers to the second to last element of the array.
const number = [13, 12, 54, 87, 65, 44, 48, 69];
// console.log(number)
// console.log(number.slice(1, 5))
// console.log(number)
//---------------splice
// Removes elements from an array and,
//  if necessary, inserts new elements in their place, 
// returning the deleted elements.
const number2 = [13, 12, 54, 87, 65, 44, 48, 69];
console.log(number2)
console.log(number2.splice(1, 4))
console.log(number2)