/* fixed : prr item wood reqirments 
1. chair = 3 ft
2. table = 10 ft
3. bed = 50 ft
*/

function woodCalculator(chairquantity, tablequantity, bedquantity) {
    const perCherWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // console.log(chairquantity, tablequantity, bedquantity);
    const chairWood = perCherWood * chairquantity;
    const tableWood= perTableWood * tablequantity;
    const bedWood = perBedWood * bedquantity;
    // console.log(chairCft, tableCft, bedCft)
    const totalWood =chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(2, 3, 4)
console.log(totalWood)