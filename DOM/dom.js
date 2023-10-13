
// javascript use tagname 
const tagnames = document.getElementsByTagName("h1")
for (tagname of tagnames) {
    tagname.style.border = "1px solid black";
    tagname.style.color = "red"
}
// javascript use id name
document.getElementById("shala").innerHTML = "Hello World!";
document.getElementById("firstId").style.backgroundColor = "green";


// javascript use class name 
const blacks = document.getElementsByClassName("balck_bg");
for (black of blacks) {
    black.style.border = "1px solid black";
}
const classnames = document.getElementsByClassName("clasName")
for (classname of classnames) {
    classname.style.backgroundColor = "red"
}
//  javascrip querySelet
document.querySelector("#id1").innerText = "bangladesh 1111"
document.querySelector(".class1").innerText = "bangladesh 2222"
document.querySelector(".clas2").innerText = "js add me"

/*----------------- 
section time try 
--------------*/
const section = document.getElementsByTagName("section");
section.style.border = "1px solid red"


const haddins = document.getElementsByTagName("h1")
for (haddin of haddins) {
    haddin.style.border = "1px solid black";
    haddin.style.color = "red"
}