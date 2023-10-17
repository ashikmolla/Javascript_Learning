
function displayUserDataLOde(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>displayData(data) )

}
function displayData(users){
    const userUi = document.getElementById('userList')
    for(const user of users){
        console.log(user)
        const userLi = document.createElement('li');
        userLi.innerText=`
        
        ${user.name}
        
        `;
        userUi.appendChild(userLi)

    }
}
displayUserDataLOde();