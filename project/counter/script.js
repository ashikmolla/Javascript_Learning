
const counterElement = document.getElementById('counter');


document.getElementById('increment').addEventListener('click', function () {
    counterElement.textContent++
})

document.getElementById('decrement').addEventListener('click', function () {
    counterElement.textContent--
})

document.getElementById('reset').addEventListener('click', function () {
    counterElement.textContent = 0
})


