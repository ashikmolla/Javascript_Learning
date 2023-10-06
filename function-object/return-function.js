//  return function pratic

function banana(money){
    var bananaPrice=10;
    var quantity=money / bananaPrice;
    return quantity;
}
// console.log(banana(20))

// pramiter function with return

function assinmentMerk(mark1, mark2, mark3){
    var totalMark=mark1 + mark2 + mark3;
    var avargMark= totalMark / 3;
    return avargMark;
}

// var ashikMark=assinmentMerk(50, 48, 45);
var firstinput=prompt("enter your First assint numver");
var secondinput=prompt("enter your First assint numver");
var threeinput=prompt("enter your First assint numver");

 var avrageAssinmentNumber=assinmentMerk(firstinput, secondinput, threeinput);

// console.log(ashikMark.toFixed(2));
document.getElementById("firstassiment").innerHTML = firstinput; 
document.getElementById("secondassiment").innerHTML = secondinput; 
document.getElementById("thardassiment").innerHTML = threeinput; 
document.getElementById("avarag-numver").innerHTML = avrageAssinmentNumber; 
// console.log(avrageAssinmentNumber)

