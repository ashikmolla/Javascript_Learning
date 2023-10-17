// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));

const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
    .then(response => response)
    .then(data => console.log(data))

function callApi() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}
function UserLode(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=> console.log(data[0].name))
}

