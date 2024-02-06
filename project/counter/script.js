
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


var selectOne = document.getElementById('select-one')
selectOne.addEventListener('change', function () {
    counterElement.textContent = parseInt(counterElement.textContent) + parseInt(selectOne.value)
})

var selectTow = document.getElementById('select-tow')
selectTow.addEventListener('change', function () {
    counterElement.textContent = parseInt(counterElement.textContent) - parseInt(selectTow.value)
})




