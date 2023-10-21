const student = {
    name:" ashik Molla ",
    mony:5000,
    stady:"computer",
    friends:[ "Atik", "saiful", "Akter"],
    exam: function(){
        return this.name+"Tomi akhane thakte hove"
    },
    improveExam: function(){
        this.exam();
        return this.name+"Tarpore ki ar parba naki "
    },
    treatday: function(amount){
        const calcutor = this.mony-amount;
        console.log(this.mony, amount)
        return calcutor;

    }

}
// console.log(student.exam())
// console.log(student.improveExam())
const treede=student.treatday(4000)
console.log(treede)