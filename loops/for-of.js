// const friends=[1, 6, 5, 6, 7, 8]
// for(const friend of friendes){
//     console.log(friend)
// }


const friends = [
    { id: 1, name: "ashik", roll: 2455 },
    { id: 2, name: "afghhik", roll: 2645 },
    { id: 3, name: "rthik", roll: 24556 },
    { id: 1, name: "ashik", roll: 2455 },
    { id: 4, name: "shik", roll: 5245 },
    { id: 1, name: "ashik", roll: 2455 }
]
//  for (const friend of friends){
//     console.log(friend)
//  }
/*
function multiFriends(friends, search){
    for(const friend of friends){
        console.log(friend)
    }
}
multiFriends(friends)
*/
function multiFriends(friends, search) {
    const matched=[];
    for (const friend of friends) {
        if(friend.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(friend);
        }
    }
    return matched

}
const rasult= multiFriends(friends, 'Ashik');
console.log(rasult)

