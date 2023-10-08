const pepole =[
    "ashik", "atik", "akter", "anika", "ashik", "anika", "ashik", "atik", 

]
function removeDuplicate(names){
    const cutNames=[];
    for(let i=0; i<names.length; i++){
        const name=names[i];
        console.log(name);
        if(cutNames.includes(name) === false ){
            cutNames.push(name)
        }
    }
    return cutNames;
}
const unickName =removeDuplicate(pepole);
console.log(unickName)