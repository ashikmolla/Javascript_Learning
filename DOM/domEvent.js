
// option  1  dricliy onclick HTML Element


// option 2 onclick 
function makeRed() {

    document.body.style.backgroundColor = "red"
}
// option 3 onclick 
const buleBtn = document.getElementById("makeBlue");
buleBtn.onclick = bgBlueColor;
function bgBlueColor() {
    document.body.style.backgroundColor = "blue"
}
// option 3 anather
const purpleBtn = document.getElementById("makePurple");
purpleBtn.onclick = function () {
    document.body.style.backgroundColor = "purple"
}
