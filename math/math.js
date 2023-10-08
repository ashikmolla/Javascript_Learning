// ------------------------------------- first system
function maxThree(x, y, z) {
    max = 0;
    if (x > y && x > z) {
        max = "max x = " + x
    } else if (y > x && y > z) {
        max = "max y = " + y
    } else {
        max = "max z = " + z
    }
    return max;
}

// console.log(maxThree(3, 2, 4))
// ------------------------------------------------------- seconsd 
const number = Math.max(10, 20, 54, 14)
// console.log(number);



// ---------------------------------thard


function maxArray(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }

    }
    return largest;
}


const hightNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tallest = maxArray(hightNumber);
console.log(tallest)


