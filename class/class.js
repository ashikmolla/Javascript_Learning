/* ---------------
 gaenaral function 
 ------------------*/
class friend {
    name;
    designation = " student";
    team = 'friend';
    location;
    stadyGroup(time) {
        console.log(`start stady time ${time}`)
    };
    exam(time) {
        console.log(`start time time ${time}`)
    };
    constructor(name, location) {
        this.name = name;
        this.location = location
    }
}

const ashik = new friend('ashik', 'comilla');
const atik = new friend('Atik', 'comilla');
// console.log(ashik)
// console.log(atik)

/*--------------------------
   second add a new function
 -----------------------------*/
class friendss {
    name;
    designation = " student";
    team = 'friend';
    location;
    stadyGroup(time) {
        console.log(`start stady time ${time}`)
    };
    exam(time) {
        console.log(`start time time ${time}`)
    };
    constructor(name, location) {
        this.name = name;
        this.location = location
    }
}

    const amir = new friendss('amir', 'comilla')
    amir.stadyGroup('6:00 - 8:00');
    amir.exam('8:30 - 9:30');
    console.log(amir)
