
// option  1  dricliy onclick HTML Element


// option 2 onclick  importen
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
// option 4

const pinkBtn = document.getElementById("makePink");
pinkBtn.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = "pink"
}
// option 4 anather

const graanBtn = document.getElementById("makeGreen");
graanBtn.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = "green"
})
// option final importen
// document.getElementById('makeGoldenRod').addEventListener('click', function(){})
document.getElementById('makeGoldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = "goldenrod"
})


/*------------------
second  section
-------------------*/
// btn click on status element txt change 
function hankelOnclick() {
    const handleStaasChange = document.getElementById("handelStatusChange");
    handleStaasChange.innerText = "My Name is : Ashik Molla"
}
document.getElementById('eventListener').addEventListener('click', function () {
    const handleStaasChange = document.getElementById("handelStatusChange");
    handleStaasChange.innerText = "My Name is- MD: Ashik Molla"
})


/*------------------
three  section
-------------------*/
// btn click on status element txt change 


document.getElementById('update-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input-value');
    const inpuText = inputValue.value;

    const p = document.getElementById('inpu-text-display');
    p.innerText = inpuText;
    inputValue.value = ''
})



/*------------------
for  section add a coment 
-------------------*/
// btn click on status element txt change 


// 1 step  add a event lisener btn
document.getElementById('addComent').addEventListener('click', function () {
    // 2 step what is add a comment 
    const newComment = document.getElementById('new-comment');
    const commentText = newComment.value;
    // console.log(commentText)
    // 3 step where set add comment 
    const commentContainer = document.getElementById('comment-container');
    const comment_p = document.createElement('p');
    comment_p.innerText = commentText;
    newComment.value = ''
    //   4 step comment conteiner add append child 
    commentContainer.appendChild(comment_p)



})


/* -----------------------
    section five DElet iteme
    ------------*/

    //  second option btn desible  unable
    document.getElementById('delet-confirm').addEventListener('keyup', function(event) {
        const text = event.target.value;
        const textvalue = text.toLowerCase();

        const deletButton = document.getElementById('delet-btn');
        if (textvalue === 'delete') {
            deletButton.removeAttribute('disabled');
        } 
        else {
            deletButton.setAttribute('disabled', true);

        }
    });

    // frist delet option  then opore section
    document.getElementById('delet-btn').addEventListener('click', function (){
        const secretInfo = document.getElementById('secret-info');
        secretInfo.style.display = 'none';
    })








