//  you are given an array :
// a) find the index if "ahmad" and replace "ahmad" with 'atik'
// b) Remove "younos" and "saiful"
var friends =['ashik', 'ahmad', 'younos'];
var bananaIndex=friends.indexOf('ahmad');
friends[bananaIndex]="atik"
console.log(bananaIndex);
console.log(friends);
friends.pop(); 
friends.push("saiful"); 
console.log(friends)