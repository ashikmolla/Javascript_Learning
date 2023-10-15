const student = {
    name: "ashik",
    roll: 47,
    sub: {
        bangla: 52,
        math: 85,
        english: 32
    }
};
const bangla =student.sub.bangla;
const eng=student['sub']['english']
console.log(bangla);
console.log(eng);